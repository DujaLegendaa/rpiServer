var socket = io(); 

window.onload = () => { 
  var lightbox = document.querySelector("#light");
  lightbox.addEventListener("change", () => { 
    console.log(this.checked)
    console.log(Number(this.checked))
    socket.emit("light", Number(this.checked)); 
  });
});

socket.on('light', data => { 
  document.querySelector("#light").checked = data; 
  socket.emit("light", data); 
});