/* NOTE: Console output position may vary because other code is also executing.
Focus on which Promise resolves/rejects and whether .then() or .catch() runs. */

//* They keyword async before a function - by default will return a promise.

function normalFunction() { /* won't return anything */ }
console.log(normalFunction());

async function asyncFunction() { /* will return a Promise on it's own. */ }
console.log(asyncFunction());


//* ====== RETURNING will be RESOLVED ======

const resolveFunc = async () => { 
    return "Here is the success response."; 
    // returning something - by default Resolve the promise. If there is no error above the return.
}

console.log(resolveFunc()); // To take a look on the promise.
resolveFunc().then((response) => console.log(response)); // To get the promise result.


//* ====== REJECTING by throwing an ERROR ======

const rejectFunc = async () => {
    // throw new Error("Request got rejected.");
    throw "Request got rejected."
}
rejectFunc()
    .then((response) => console.log('Success, ' + response))
    .catch((err) => console.log('Rejected, ' + err)) // Will catch the thrown error (rejection)


//* FAKE LOGIN with Username and Password.

const login = async (username, password) => {
    // use, throw new Error('') -> for better understand of the code.
    // for learning purpose and short err output I just use throw.
    if(!username || !password) throw ("Enter both username and password");
    if(password !== 123) throw ("Invalid Password.")
    return "Logged in Successfully."
}
 
// only passing username and not the password
login('bob')
.then((res) => console.log(res))
.catch((err) => console.log(err))

// passing both but '123' String password is !== 123 as a Number
login('bob', '123')
.then((res) => console.log(res))
.catch((err) => console.log(err))

// Correct.
console.log("THIRD CALL STARTING");
login('bob', 123)
.then((res) => console.log(res))
.catch((err) => console.log(err))
console.log("THIRD CALL CREATED");
