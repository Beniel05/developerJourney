let marks = {
    Alex: 99,
    Bob: 80
}

console.log(marks.Alex);
console.log(marks["Alex"]);

// Adding to the object.
marks.Catherin = 90;
marks["Donald"] = 50;

console.log(marks);

// Changing datatype
marks.Bob = "A";
marks.Catherin = "A+";

console.log(marks);