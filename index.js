const express = require("express")
const path = require("path")
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'public'));

const http = require("http").createServer(app);
const fs = require("fs")
var io = require('socket.io')(http)

http.listen(8000)

app.get("/", (req, res) => {
    res.render("index.ejs")
})

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