// Each row represents a classroom.
// Each classroom has a different number of students.

const classrooms = [
    ["John", "Emma", "David"],
    ["Sophia", "Liam"],
    ["Olivia", "Noah", "Mia", "Lucas"]
];

console.log("========== Using Nested for Loop ==========");

for (let i = 0; i < classrooms.length; i++) {

    console.log(`Classroom ${i + 1}:`);

    for (let j = 0; j < classrooms[i].length; j++) {
        console.log(`Student: ${classrooms[i][j]}`);
    }

    console.log();
}

console.log("\n========== Using Nested for...of Loop ==========");

let classNumber = 1;

for (let classroom of classrooms) {
    console.log(`Classroom ${classNumber}:`);
    for (let student of classroom) {
        console.log(`Student: ${student}`);
    }
    classNumber++;
    console.log();
}