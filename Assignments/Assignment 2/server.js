const express = require('express');
const app = express();
const http = require('http');
const port = 3000;
const server = http.createServer(app)
const {Server} = require('socket.io');
const io = new Server(server);
var {Poll} = require("./poll")
var votes = Poll.getVotes();

app.use(express.static("./"))
app.get('/', (req, res) =>{
    res.render('index.html')
})

server.listen(port, ()=>{
    console.log(`Listening on http://localhost:${port}`); 
})


io.on('connection', (socket)=>{
    
    console.log(`'A user connected with ID: ${socket.id}`);
    console.log("votes: ");
    console.log(votes);

    socket.emit("update", JSON.stringify(votes));


    socket.on("vote", (catName)=>{        
        Poll.vote(catName)
        io.emit("update", JSON.stringify(votes));  //io.emit emits to all the clients connected to the server    
    })

    socket.on("disconnect",()=>{
        console.log("A user has disconnected");  
    })
    
})
