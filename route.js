const http = require('http');
const re=require('./route');
const server = http.createServer(re);
    const port = 4000;
    server.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
    