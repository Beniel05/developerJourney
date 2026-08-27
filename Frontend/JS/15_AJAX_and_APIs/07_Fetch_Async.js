const response = await fetch("https://fakestoreapi.com/products/1");
const data = await response.json();
console.log("Data:", data);

console.log('\n======= GETTING TWO PEOPLE ========');

const getStarWarsPeople = async () => {
    // First
    const res1 = await fetch('https://swapi.dev/api/people/1/');
    const data1 = await res1.json();
    console.log("Resolved 1:", data1);

    // Second
    const res2 = await fetch('https://swapi.dev/api/people/2/');
    const data2 = await res2.json();
    console.log("Resolved 2:", data2);
}

await getStarWarsPeople();

console.log('\n===== Using Try/Catch for Error Handling =====');

const apiRejection = async() => {
    try {
        const res = await fetch('asdf;lkj'); // wrong url
        const data = await res.json();
        console.log(data);
    } catch (e) {
        console.log("Error:", e);
    }
}

await apiRejection();