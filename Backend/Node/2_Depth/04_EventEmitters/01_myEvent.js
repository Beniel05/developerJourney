// const { EventEmitter } = require('node:stream');
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// Listen for the event
eventEmitter.on('greet', () => {
    console.log("Hello and welcome to Events in JS");
});

// Trigger the event
eventEmitter.emit('greet');