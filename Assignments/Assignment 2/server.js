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

io.on('connect', ()=>{
    
})
