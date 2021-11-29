const fs = require("fs");
const http = require("http");
const port = process.env.PORT || 3000;

const serveStaticFile = (res, path, type, responseCode = 200) => {
  fs.readFile(__dirname + path, (error, data) => {
    if (error) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      return res.end("500 - Server Error");
    }
    res.writeHead(responseCode, type);
    res.end(data);
  });
};

const server = http.createServer((req, res) => {
  const path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();
  switch (path) {
    case "":
      serveStaticFile(res, "/public/home.html", "text/html");
      break;
    case "/about":
      serveStaticFile(res, "/public/about.html", "text/html");
      break;
    case "/img/logo.png":
      serveStaticFile(res, "/public/img/logo.png", "image/png");
      break;
    default:
      serveStaticFile(res, "/public/404.html", "text/html", 404);
  }
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
