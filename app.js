const http = require('http');

const port = 3000;

http.createServer((req,res)=>{
res.writeHead(200,{'Content-Type':'text/plain'});
res.end('Welcome to ECS Fargate POC');
}).listen(port);

console.log("Application Started");
