const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/' && method === 'POST') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head>');
    res.write('<title>');
    res.write('</title>');
    res.write('</head>');
    res.write('<body>');

    // Read the data from the file and display it above the form
    fs.readFile('message.txt', 'utf8', (err, data) => {
      if (!err) {
        res.write(`<p>Previous Message: ${data}</p>`);
      }

      res.write('<form action="/message" method="POST">');
      res.write('<input type="text" name="message">Enter message');
      res.write('<button type="submit">Add</button>');
      res.write('</form>');

      res.write('</body>');
      res.write('</html>');
      res.end();
    });
  }

  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsebody = Buffer.concat(body).toString();
      const message = parsebody.split('=')[1];
      fs.writeFile('message.txt', message, (err) => {
        if (!err) {
          res.statusCode = 302;
          res.setHeader('Location', '/');
          return res.end();
        } else {
          console.error('Error writing to file:', err);
          res.statusCode = 500;
          res.end('Server Error');
        }
      });
    });
  }
});

const port = 4000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
