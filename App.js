const http = require('http');
const path = require('path');
const fs = require('fs');
const rootPath = path.join(__dirname, "Views")
const server = http.createServer((req, res) => {
    console.log(req.method)
    res.setHeader('Content-Type', 'text/html');
    switch (req.url) {
        case '/':
            resPath = path.join(rootPath, "index.html");
            res.statusCode = 200;
            break;
        case '/aboutus':
            resPath = path.join(rootPath, 'about.html');
            res.statusCode = 200;
            break;
        case '/about':
            res.setHeader('Location', '/aboutus')
            res.statusCode = 301;
            break;
        default:
            resPath = path.join(rootPath, '404.html');
            res.statusCode = 404;
            break;
    }
    // res.write("Hello pepcoders")
    // res.write("nicely done")
    // res.end()
    // switch (req.url) {
    //     case "/about":
    //         req.statusCode = 200;
    //         res.bo
    // }
    let file = res.statusCode != 301 ? fs.readFileSync(resPath) : "";
    res.end(file)
})
server.listen(5000, 'localhost', () => {
    console.log("server started listening")
})