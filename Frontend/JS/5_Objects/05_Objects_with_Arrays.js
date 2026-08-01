// ===============================
// 1. Student Object
// ===============================

const student = {
  name: "John",
  age: 21,

  skills: ["HTML", "CSS", "JavaScript"],

  contact: {
    email: "john@gmail.com",
    phone: "9876543210"
  }
};

console.log("\n===== Student =====");
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Skills:", student.skills.join(", "));
console.log("Email:", student.contact.email);
console.log("Phone:", student.contact.phone);


// ===============================
// 2. Products Array
// ===============================

const products = [
  {
    id: 101,
    name: "Laptop",
    brand: "Dell",
    price: 65000,

    reviews: [
      {
        username: "Ben",
        rating: 5,
        comment: "Excellent laptop!"
      },
      {
        username: "Alice",
        rating: 4,
        comment: "Worth the money."
      }
    ]
  },
  {
    id: 102,
    name: "Mouse",
    brand: "Logitech",
    price: 1200,

    reviews: [
      {
        username: "David",
        rating: 5,
        comment: "Very smooth."
      }
    ]
  }
];

console.log("\n===== Products =====");

// First product
console.log("Product:", products[0].name);
console.log("Brand:", products[0].brand);
console.log("Price:", products[0].price);

// Accessing the reviews array
console.log("First Review User:", products[0].reviews[0].username);
console.log("First Review Rating:", products[0].reviews[0].rating);
console.log("First Review Comment:", products[0].reviews[0].comment);

console.log();

console.log("Second Review User:", products[0].reviews[1].username);
console.log("Second Review Rating:", products[0].reviews[1].rating);
console.log("Second Review Comment:", products[0].reviews[1].comment);


// ===============================
// 3. Comments Array
// ===============================

const comments = [
  {
    id: 1,
    username: "Ben",
    comment: "Great tutorial!",
    likes: 15
  },
  {
    id: 2,
    username: "Alice",
    comment: "Very easy to understand.",
    likes: 22
  },
  {
    id: 3,
    username: "Chris",
    comment: "Waiting for Part 2.",
    likes: 9
  }
];

console.log("\n===== Comments =====");

comments.forEach(comment => {
  console.log(`${comment.username}: "${comment.comment}" (${comment.likes} likes)`);
});