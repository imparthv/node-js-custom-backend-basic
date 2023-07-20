const http = require("http");
const port = 3000;
const hostName = "127.0.0.1";

const fileModule = require("fs");
const home = fileModule.readFileSync("./index.html");
const about = fileModule.readFileSync("./about.html");
const service = fileModule.readFileSync("./service.html");
const contact = fileModule.readFileSync("./contact.html");

const server = http.createServer((req, res) => {
    console.log(req.url);

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    if (req.url == '/') {
        res.end(home);
    }
    else if (req.url == '/about') {
        res.end(about);
    }
    else if (req.url == '/service') {
        res.end(service);
    }
    else if (req.url == '/contact') {
        res.end(contact);
    }
    else {
        res.statusCode = 404;
        res.end('<h1>404 PAGE NOT FOUND</h1>');
    }
})

server.listen(port, hostName, () => {
    console.log(`Server is running at http://${hostName}:${port}/`)
});

