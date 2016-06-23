var http = require('http');
var port = 80;

function requestHandler (request, response) {
    
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
}

var server = http.createServer(requestHandler);

server.listen(port);


console.log('Server running at http://127.0.0.1:' + port);

