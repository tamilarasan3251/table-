const http = require("http");
http
  .createServer(function (req, res) {
    res.write("welcome");
    res.end();
  })
  .listen(5000, () => {
    console.log("server open in:5000");
  });
