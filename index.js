const http = require("http")
const fs = require("fs")

const requireListener = (req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    fs.readFile("./index.html", null, (err, data) => {
        if(err) {
            res.writeHead(404);
            res.write("File not found");
        } else {
            res.write(data);
        }
        res.end();
    });
} 

http.createServer(requireListener).listen(8000)