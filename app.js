// import * as connectdb from "./connectdb.js"
// import {abc} from './test/testimport'
let k = require('./testimport')
var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (request, response) {
    var parse = url.parse(request.url, true);
    var path = parse.path;
    k.abc()
    // abc();
    //Nếu không truyền tham số lên url thì load trang home.html
    if (path === '/') {
        console.log(path+'./html.html');
        fs.readFile('./index.html', function (error, data) {
            response.writeHead('200', {'Content-Type': 'text/html'});
            response.end(data);
            // connectdb.abc();
            
            
        })
    } else { //ngược lại nếu truyền tham số lên url thì sẽ load trang tương ứng
        var load = "." + path;
        fs.readFile(load, function (error, data) {
            console.log(load);
            if (load.indexOf("css") > 0) {
                response.writeHead('200', {'Content-Type': 'text/css'});
                response.end(data);                
            }
            else
            if (load.indexOf(".js") > 0) {
                response.writeHead('200', {'Content-Type': 'text/javascript'});
                response.write(data);
                response.end();                
                
            }
            else
            if (error) {
                response.writeHead('404', {'Content-Type': 'text/html'});
                response.end('<h1>404 not found</h1>');
                
            } else {
                response.writeHead('200', {'Content-Type': 'text/html'});
                response.end(data);
            }

        })
    }
}).listen(8000);