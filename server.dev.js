const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const routes = require("./routes");

const app = next({ dev: process.env.NODE_ENV !== "production" });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  createServer(handler).listen(8080);
});
