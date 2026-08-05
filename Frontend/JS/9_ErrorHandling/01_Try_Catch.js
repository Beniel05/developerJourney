try {
    undefined.toUpperCase();
} catch {
    console.log("Caught an Error and prevent from stopping the remaing program.");
}

console.log("Remaining Program...");

console.log('======================');
// Another example

function makeUpperCaseAndPrint3Times(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (error) {
        // console.log(error);
        console.log("Please enter a Valid String!.");
    }        
}

makeUpperCaseAndPrint3Times("Hello ") // This is a String - so it'll have that .toUpperCase() method.
makeUpperCaseAndPrint3Times(1234) // This is a Number - it don't have that .toUpperCase() method.