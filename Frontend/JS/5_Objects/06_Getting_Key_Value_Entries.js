const employee = {
    id: 1001,
    name: "John Doe",
    role: "Software Engineer",
    department: "Development",
    salary: 85000,
    experience: "3 Years",
    location: "Chennai"
};

console.log('=== KEYS ===');
console.log(Object.keys(employee));

console.log('\n=== VALUES ===');
console.log(Object.values(employee));

console.log('\n=== ENTRIES ===');
console.log(Object.entries(employee));