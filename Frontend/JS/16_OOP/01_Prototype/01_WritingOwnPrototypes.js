// console.dir(String.prototype);
console.log(String.prototype);

// Both for Demonstration to understand Prototype concept and (not a good practice to use it).

/* STRING */

String.prototype.happy = function () {
    return `OMG! ${this.toUpperCase()}!!!`
}

str = "I am happy";
console.log(str.happy());

/* ARRAY - changing existing prototype */

Array.prototype.push = function() {
    return `Sorry, I can't add elements.`
}

let arr = [1,2,3];
console.log(arr.push(4));