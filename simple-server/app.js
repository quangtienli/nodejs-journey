const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('This is a simple http server');
});

server.listen(8080, '0.0.0.0', () => {
  console.log('Server is running at port 8080');
});
