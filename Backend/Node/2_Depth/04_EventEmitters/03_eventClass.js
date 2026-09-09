const EventEmitter = require("node:events");

class Chat extends EventEmitter {
  sendMessage(msg) {
    console.log(`Message sent: ${msg}`);
    this.emit("messageReceived", msg);
    this.emit("test", msg);
  }
}

const chat = new Chat();

chat.on("messageReceived", (msg) => {
  console.log(`New Message: ${msg}`);
  
});

chat.on("another", (msg) => {
  console.log(`Test: ${msg}`);
});

chat.sendMessage("Hello World");
