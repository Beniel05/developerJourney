const ChatRoom = require("./chatRoom.js");

const gamingRoom = new ChatRoom();

gamingRoom.on("join", (user) => {
  console.log(`${user} has joined the room.`);
});
gamingRoom.on("message", (user, message) => {
  console.log(`${user} : ${message}`);
});
gamingRoom.on("leave", (user) => {
  console.log(`${user} has left the room.`);
});

// Simulating the Chat.

gamingRoom.join("Alice");
gamingRoom.join("Bob");

gamingRoom.sendMessage("Alice", "Hello Everyone!.");
gamingRoom.sendMessage("Bob", "Hey There...");

gamingRoom.leave("Alice");

// Alice has left the room - can't send message.
gamingRoom.sendMessage("Alice", "Alice left the room can't send message");

gamingRoom.leave("Bob");

// Random person can't send message - if they're not in the room.
gamingRoom.sendMessage("Carlo", "This will not work anyways.")