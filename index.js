let requireListener = (req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    fs.readFile(__dirname + '/public/index.html', null, (err, data) => {
        if(err) {
            res.writeHead(404);
            res.write("File not found");
        } else {
            res.write(data);
        }
        res.end();
    });
} 

const http = require("http").createServer(requireListener);
const fs = require("fs")
var io = require('socket.io')(http)

http.listen(8000)

io.sockets.on('connection', (socket) => {// WebSocket Connection
    var lightvalue = 0; //static variable for current status
    socket.on('light', (data) => { //get light switch status from client
      lightvalue = data;
      if (lightvalue) {
        console.log(lightvalue); //turn LED on or off, for now we will just show it in console.log
      }
    });
  }); 

console.log("listening on 8000")