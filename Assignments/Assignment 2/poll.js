class Poll {
    constructor(arr) {
        this.votes = arr;
    }

    vote(name){
        const candidate = this.votes.find(obj => obj.name === name);
        
        if(candidate) {
            candidate.votes += 1;
        }
    }

    getVotes(){
        return this.votes;
    }
}

var votes = [
    {name:"pebble", votes:0},
    {name:"sunshine", votes:0},
    {name:"miso", votes:0},
    {name:"panko", votes:0},
    {name:"snowball", votes:0},
]

var poll = new Poll(votes)
module.exports.Poll = poll;