var express = require('express');
var app = express();
var path = require('path');
let server = require('http').Server(app);
var port = process.env.PORT || 8000
app.use(express.static(path.join(process.cwd(), 'source')));
server.listen(port, function() {
    console.log("App is running on port " + port);
});
console.log(process.env.PORT || 5000);
app.listen(process.env.PORT || 5000);