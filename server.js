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
  server.get('/robots.txt', (req, res) => {
    res.type('text/plain');
    res.send('User-agent: *\nDisallow: /');
  });

  server.get('*', (req, res, next) => {
    if (req.headers['x-forwarded-proto'] === 'http') {
      return res.redirect('https://threelittlepigsmasonry.com');
      next();
    }
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
