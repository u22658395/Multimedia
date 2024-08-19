const socket = io();

socket.on("connect",()=>{
    console.log(`I connected with ID: ${socket.id}`);
})
