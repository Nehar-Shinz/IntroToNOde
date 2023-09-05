var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req,res){
    var q = url.parse(req.url,true);
    // console.log(q);
    // console.log(q.href);
    
    var filename = '.' + q.pathname;
    if (filename == "./"){filename="./index"}
    filename += ".html";
    fs.readFile(filename,function(err,data){
        if(err){
            res.writeHead(400,{'Content-Type':'text/html'});
            res.write("404!, page not found.");
            res.end();
        }else{
            res.writeHead(200, {'Content-type':'text/html'});
            res.write(data);
            res.end();
        }
    // var dates = q.year;
    // res.end(dates);
    // res.end('hello world! My name is John Elder!');
    })
}).listen(8080);


console.log("Server Listening on port 8080...");