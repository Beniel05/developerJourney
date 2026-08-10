function fun() {
    console.log(arguments); // these arguments are not captured with a parameter. 
    // And it's not an array
}

fun(10,20,30,40,50); // These all arguments will be passed to that function

console.log('==========================');
function sum(...nums) {
    console.log(nums.reduce((acc, cur) => acc + cur)); 

    // To get the argument array of nums;
    console.log(nums);
}

sum(10, 20, 30);

console.log('==========================');
function marathon(winner, runner, ...everyoneElse) {
    console.log("1st Price: " + winner);
    console.log("2nd Price: " + runner);
    console.log("Participation Prices to:", everyoneElse);
    // console.log("Participation Prices to:" + everyoneElse);

    /* 
    * You do not get brackets [] with the plus sign (+) because + forces JavaScript to convert your array into a plain text string, 
    * whereas a comma (,) passes the array as a separate, interactive data structure.
    */
}

marathon('Alan', 'Bob', 'Charles', 'David', 'Eric', 'Fernandas');

// ❌ This will throw a SyntaxError: Rest parameter must be last formal parameter;

// function createUser(...extraFields, email, password) {
//   / Code breaks before running
// }
