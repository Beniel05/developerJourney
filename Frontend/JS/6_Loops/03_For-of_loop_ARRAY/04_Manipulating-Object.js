const students = {
    John: 85,
    Emma: 92,
    Liam: 78,
    Sophia: 95,
    Noah: 88,
    Olivia: 91,
    Ethan: 73,
    Mia: 97,
    Lucas: 81,
    Ava: 89
};

let total = 0;

for(let mark of Object.values(students)) {
    total += mark;
}

console.log(total);

// Either use the (Object.keys(students).length) - because OBJECT have no length method.
console.log(`Average: ${total / (Object.keys(students).length)}`);
// OR - let arr = (Object.keys(students)). Assign that to an array variable. Then use 'arr.length'