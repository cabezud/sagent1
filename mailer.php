<?php

    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = strip_tags(trim($_POST["name"]));
		$name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $phone = $_POST["phone"];
        $message = trim($_POST["message"]);


        // Check that data was sent to the mailer.
        if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            header("HTTP/1.0 404 Not Found");//http_response_code(400);
            echo "Oops! There was a problem with this submission. Please complete the form and try again.";
            exit;
        }

        $recipient = "info@sagentmanagement.com, israel@sagentmanagement.com";
        $subject = "Sagent website contact from $name";
        $email_content = "Name: $name\n";
        $email_content .= "Phone: $phone\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Message:\n$message\n";

        // Build the email headers.
        $email_headers = "From: $name <$email>";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            header(":", TRUE, 200);//http_response_code(200);
            echo "Thank You! Your message has been sent.";
        } else {
            // Set a 500 (internal server error) response code.
            header("HTTP/1.0 404 Not Found");//http_response_code(500);
            echo "Oops!! Something went wrong and we couldn't send your message.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        header("HTTP/1.0 404 Not Found");//http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }

?>