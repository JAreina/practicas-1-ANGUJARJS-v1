var express = require('express'),
  app = express();
app.use(express.static(__dirname + '/'))
  .get('*', function(req, res) {
    res.sendFile('./index/index.html', {
      root: __dirname
    });
  }).listen(9999);
console.log("SERVIDOR http://localhost:9999")
