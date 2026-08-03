function capitalize(str) {
    
    let firstLetter = str[0].toUpperCase();
    let rest = str.slice(1);
    
    return firstLetter + rest;
}

console.log(capitalize("hello"));