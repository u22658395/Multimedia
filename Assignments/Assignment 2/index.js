const socket = io();
var form = document.getElementById("poll");

socket.on("connect",()=>{
    console.log(`I connected with ID: ${socket.id}`);
    
    form.addEventListener("submit",formEvent)
})


function formEvent(event) {
    event.preventDefault();

    var selectedInput = document.querySelector('input[name="catName"]:checked');

    var votes = [];
    if(selectedInput !== null){
        var catName = selectedInput.value;
        votes[catName]++;        
        socket.emit("vote", catName);

    }
}
