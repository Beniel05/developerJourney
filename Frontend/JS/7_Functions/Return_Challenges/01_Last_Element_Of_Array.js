function lastElement(a) {

    if(a.length == 0) {
        return null;
    }

    // return a[a.length - 1];
    return a.at(-1);
}

console.log(lastElement([]));
console.log(lastElement([1, 2, 3]));
console.log(lastElement([10]));