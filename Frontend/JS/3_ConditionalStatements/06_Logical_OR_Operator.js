// || - Anyone of the condition have to be true = true.

let age = -10;

if(age < 0) {
    // Negative numbers.
    console.log("Age cannot be Negative.");
} else {

    // && has higher precedence than ||. For visualization I added ()

    if((age >= 0 && age < 5) || age >= 65) { 
        // Here the && makes no sense, because we already checked for negative ages above. (but we can use expressions like this)
        // 0 to 5 | OR | 65 to +values.
        console.log("Free");
    } else if (age <= 12) { // 5 to 10
        console.log("$5");
    } else if (age < 19) { // 13 to 19 - teen
        console.log("$10");
    } else if (age < 65) { // 19 to 65 - adult
        console.log("$20");
    }
}
