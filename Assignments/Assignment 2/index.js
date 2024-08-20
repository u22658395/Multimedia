const socket = io();
var form = document.getElementById("poll");

socket.on("connect",()=>{
    console.log(`I connected with ID: ${socket.id}`);
    
    form.addEventListener("submit",formEvent)
    socket.on("update", updateHandler)
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

var updateHandler = function(data){

    data = JSON.parse(data);
    
    Object.keys(data).forEach(key => {
        var label = document.querySelector(`input[id="${key}"]`).nextElementSibling;
        var span = label.firstElementChild;
        span.textContent = data[key];
        
    });
    
}
