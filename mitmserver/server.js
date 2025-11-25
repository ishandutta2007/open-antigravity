const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
  console.log('Request received:');
  console.log('  Method:', req.method);
  console.log('  URL:', req.url);
  console.log('  Headers:', req.headers);

  proxy.web(req, res, { target: 'http://localhost:3000' }, (e) => {
    console.error('Proxy error:', e);
    res.writeHead(502);
    res.end('There was an error proxying the request.');
  });
});

proxy.on('proxyRes', (proxyRes, req, res) => {
  console.log('Response received:');
  console.log('  Status:', proxyRes.statusCode);
  console.log('  Headers:', proxyRes.headers);
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`MITM Proxy server listening on port ${PORT}`);
});
