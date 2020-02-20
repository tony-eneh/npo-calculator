var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function(req, res) {
    // A parsed url to work with in case there are parameters
    var _url;
    // In case the client uses lower case for methods.
    req.method = req.method.toUpperCase();
    console.log(req.method + ' ' + req.url);
    if (req.method !== 'GET') {
        res.writeHead(501, {
            'Content-Type': 'text/plain'
        });
        return res.end(req.method + ' is not implemented by this server.');
    }

    //router
    if (_url = /^\/$/i.exec(req.url)) {

    } else if (_url = /^\/[A-Za-z\-\_]+.html$/i.exec(req.url)) {

    } else {
        // page doesnt exist
        res.writeHead(300);
        return res.end('the requested page does\'nt exist');
    }
}).listen(process.env.PORT || 1337);


const sendFile = (res, ) => {
    const requestedFile = path.join(process.env.PWD, _url[0]);
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    console.log(requestedFile);
    fs.access(requestedFile, (err) => {
        if (err) {
            if (err.code === 'ENOENT') {
                return res.end('requested page does not exist on this server');
            }
            throw err;

        }
        //_url is an array, its first member (_url[0]) is where our matched output is
        return fs.createReadStream(requestedFile).pipe(res);
    });
}