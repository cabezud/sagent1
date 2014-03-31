var connect = require('connect');

connect.createServer(
    connect.static(__dirname)
).listen(8080);
/* to run, $ node server.js    
then http://localhost:8080/yourfile.html */