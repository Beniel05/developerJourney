const EventEmitter = require('events');

const eE = new EventEmitter();

eE.on('greet', (name = "Unknown") => {
    console.log(`Hello ${name}, Welcome to Events`);
});

// eE.emit("greet", "Beniel");
// eE.emit("greet");

// Another Listener (Listener #2) Listening to the same Event
eE.on("greet", () => console.log("Second Listener of Greet"))

/*
* The Event Name: "greet"
* The Listener Function: () => console.log("Second Listener of Greet")
* The Action: eE.on(...) registers that listener to that event.
*/

eE.emit("greet", "Beniel");
eE.emit("greet");

console.log('====================================');

eE.once("notify", () => {
    console.log(`This will gets printed only once.`);
})

eE.emit("notify");
eE.emit("notify");

console.log('====================================');

const myListener = () => { console.log("I am a test Listener") }
eE.on("test", myListener);

eE.emit("test");
eE.emit("test");
eE.removeListener("test", myListener);
eE.emit("test");

console.log('====================================');

console.log(eE.listeners('greet'));
console.log(eE.listenerCount('greet'));