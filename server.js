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
    if (req.headers['x-forwarded-proto'] === 'http') {
      res.redirect('https://threelittlepigsmasonry.com');
    }
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
