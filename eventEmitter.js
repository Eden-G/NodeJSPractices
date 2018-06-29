var EventEmitter = require('events');

class Violin extends EventEmitter{
    constructor(){
        super();
        let self = this;
        setInterval(function(){
            self.emit('note')},1000);
        
    }
}

var ViolinInst = new Violin();
ViolinInst.on('note', function(){
    console.log("Violin is Playing!");
})