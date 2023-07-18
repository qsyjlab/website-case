const http = require("http");
const fs = require("fs");
const path = require("path");
const { projectRoot, systemRoot } = require("./utils/path");

const port = 8002;

console.log("__dirname", projectRoot);
const folderPath = systemRoot + "/"; // 将 'your_folder_name' 替换为你要指向的文件夹名

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

  // 检查文件是否存在
  fs.access(requestedFilePath, fs.constants.F_OK, (err) => {
    if (err) {
      // 文件不存在，返回 404 Not Found
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
    } else {
      // 检查请求的文件是否是 YAML 文件
      if (path.extname(requestedFilePath).toLowerCase() === ".yml") {
        // 读取文件内容并返回给客户端
        fs.createReadStream(requestedFilePath).pipe(res);
      } else {
        // 不是 YAML 文件，返回 403 Forbidden
        res.writeHead(403, { "Content-Type": "text/plain" });
        res.end("403 Forbidden");
      }
    }
  });
});

server.listen(port, () => {
  console.log(`Proxy server is running at http://localhost:${port}`);
});
