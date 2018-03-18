const next = require('next');
const routes = require('./routes');
const express = require('express');
const { join } = require('path');
const { parse } = require('url');
const fs = require('fs');
const { createServer } = require('https');
const http = require('http');

const port = 443;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app);

const key = fs.readFileSync('./certs/private.key');
const cert = fs.readFileSync('./certs/cert.crt');
const gd1 = fs.readFileSync('./certs/gd1.crt');
const gd2 = fs.readFileSync('./certs/gd2.crt');
const gd3 = fs.readFileSync('./certs/gd3.crt');

app.prepare().then(() => {
  http
    .createServer((req, res) => {
      res.writeHead(301, { Location: 'https://threelittlepigsmasonry.ca' });
      res.end();
    })
    .listen(80, (err) => {
      if (err) throw err;
    });

  createServer({ key, cert, ca: [gd1, gd2, gd3] }, (req, res) => {
    const parsedUrl = parse(req.url, true);
    const rootStaticFiles = ['/robots.txt', '/sitemap.xml'];
    if (rootStaticFiles.indexOf(parsedUrl.pathname) > -1) {
      const path = join(__dirname, 'static', parsedUrl.pathname);
      app.serveStatic(req, res, path);
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
