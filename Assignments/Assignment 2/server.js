const express = require('express');
const app = express();
const http = require('http');
const port = 3000;
const server = http.createServer(app)
const {Server} = require('socket.io');
const io = new Server(server);

app.use(express.static("./"))
app.get('/', (req, res) =>{
    res.render('index.html')
})

server.listen(port, ()=>{
    console.log(`Listening on http://localhost:${port}`); 
})

var votes = {};

io.on('connection', (socket)=>{
    console.log(`'A user connected with ID: ${socket.id}`);
    socket.emit("update", JSON.stringify(votes));


    socket.on("vote", (catName)=>{        
        if(!votes[catName]){
            votes[catName] = 1;
            io.emit("update", JSON.stringify(votes));  //io.emit emits to all the clients connected to the server
        }
        else{
            votes[catName]++;
            io.emit("update", JSON.stringify(votes));
        }


        
    })

    socket.on("disconnect",()=>{
        console.log("A user has disconnected");  
    })
    
})
