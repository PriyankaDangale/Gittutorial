const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('my name is Priyanka'); 
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
