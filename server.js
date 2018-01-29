const next = require('next')
const fs = require('fs');
const routes = require('./routes')
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app)
const cert = fs.readFileSync('./certs/cert.crt').toString();
const key = fs.readFileSync('./certs/private.key').toString();
const certA = fs.readFileSync('./certs/gd1.crt').toString();
const certB = fs.readFileSync('./certs/gd2.crt').toString();
const certC = fs.readFileSync('./certs/gd3.crt').toString();
const {createServer} = require('https');
app.prepare().then(() => {
  createServer({key, cert, ca: [certA, certB, certC] }, handler).listen(443)
})
