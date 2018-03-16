const next = require('next');
const routes = require('./routes');
const express = require('express');

const port = 8080;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();
  server.set('trust proxy');
  server.get('*', (req, res) => {
    console.log('1', req.headers.host);
    console.log('2', req.headers.referer);
    console.log('3', req.headers['x-forwarded-for']);
    console.log('3', req.headers['x-forwarded-proto']);

    console.log(req.headers);

    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});

/*
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  createServer(handler).listen(8080);
});


*/
