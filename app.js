const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write(`
          ##         .
    ## ## ##        ==
 ## ## ## ## ##    ===
/""""""""""""""""\\___/ ===
{                       /  ===-
\\______ O           __/
 \\    \\         __/
  \\____\\_______/


Hello from Docker!
`);
  res.end();
});

server.listen(5003, () => {
  console.log("Server started! on port 8080");
});
