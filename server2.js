const http = require("http");
const path = require("path");
const fs = require("fs");

const PORT = 3000;

const server = http.createServer((req, res) => {
  const filePath = path.join(
    __dirname,
    req.url === "/" ? "index.html" : req.url
  );
  //__dirname ==> current directory

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      return res.end("<h1>404 Not Found</h1>");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
});

server.listen(PORT, () =>
  console.log(`Server is running on port http://localhost:${PORT}`)
);
