const employee = {
    id: 1001,
    name: "John Doe",
    role: "Software Engineer",
    department: "Development",
    salary: 85000,
    experience: "3 Years",
    location: "Chennai"
};

for(let i in employee) {
    console.log(`i -> ${i} : employee[i] -> ${employee[i]}`);
}