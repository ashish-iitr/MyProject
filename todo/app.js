var express = require("express");
var fs = require("fs");
var app = express();
app.use(express.logger());
app.use(express.static(__dirname + '/app/'));



app.get('/todo', function(request, response) {
    fs.readFile('app/views/sidebar.html', function(err, html) {
        response.writeHead(200, {
            "Content-Type": "text/html"
        });
        response.end(html);
    });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
    console.log(__dirname);
});
