const http = require("http");
const fs = require("fs");
const path = require("path");
const { examplesRoot } = require("./utils/path");

const port = 8003;

const folderPath = examplesRoot + "/";

const server = http.createServer((req, res) => {
  const requestedFilePath = path.join(folderPath, req.url);

  res.setHeader("Access-Control-Allow-Origin", "*"); // 允许所有来源的跨域请求
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // 允许的请求方法
  res.setHeader("Access-Control-Allow-Headers", "Content-Type"); // 允许的请求头

  if (req.method === "OPTIONS") {
    // 处理预检请求，直接返回 200
    res.writeHead(200);
    res.end();
    return;
  }

  try {
    // 检查文件是否存在
    fs.access(requestedFilePath, fs.constants.F_OK, (err) => {
      if (err) {
        // 文件不存在，返回 404 Not Found
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
      } else {
        fs.createReadStream(requestedFilePath).pipe(res);
      }
    });
  } catch (error) {
    // 发生错误时，发送状态码 500 和错误消息
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Internal Server Error");
  }
});

server.listen(port, () => {
  console.log(`Proxy server example is running at http://localhost:${port}`);
});
