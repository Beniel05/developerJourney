function sumArray(a) {
    let sum = 0;

    for(let num of a) {
        sum += num;
    }

    return sum;
}

console.log(sumArray([1,2,3,4,5]));
console.log(sumArray([1,2,3,4,5,100]));
console.log(sumArray([600,500,400,300,200,100]));