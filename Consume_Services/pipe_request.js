const port = 3000;

const http = require('http'),
    server = http.createServer().listen(port);

const baseUrl = 'httpbin.org';

server.on('request', (req, res) => {
  var connector = http.request({
    host: baseUrl,
    path: req.url,
    method: req.method
  }, (resp) => {
    resp.pipe(res);
  });

  req.pipe(connector);
});

console.log('Server Running on Port : ' + port );
