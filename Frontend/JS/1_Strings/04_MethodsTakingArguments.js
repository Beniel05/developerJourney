// Methods which has Parameters will accepts Arguments.
// Parameters are the placeholder of the methods.
// Arguments are the actually value passed by the user or the program.

/*      INDEX OF AND SEARCH     */

const text = "Hello world!";

// indexOf cannot use case-insensitive regex flags
console.log(text.indexOf(/WORLD/i)); // Returns -1
// search handles regex effortlessly
console.log(text.search(/WORLD/i));  // Returns 6


let word = "asdf;lkj";
// Search is specially made for Regular Expressions 'REGEX'
console.log(word.search('f')); // 3 = will give the first occurence index of that first character
console.log(word.search('df;lk')); // 2 = d at 2nd index.
console.log(word.search('a;')); // -1 if not found.
// Index Of
console.log(word.indexOf('f')); // same if found - first index, if not = -1.


/*      SLICE     */

let str = "SomeRandomTextToCut Also with Spaces";
let subStr1 = str.slice(0,4); // (includes, excludes) = (0,4) = [0 (included), 1, 2, 3] NOT 4 -> (excluded)
console.log(subStr1);

let subStr2 = str.slice(4); // Starting included -> to the end of the string
console.log(subStr2);

// If we pass - negative values i'll get the characters from the last of the string;
let subLast1 = str.slice(-6); // Spaces -> -1 to -6 (included)
console.log(subLast1);


/*      REPLACE     */

let mainText = "One two three four fill";
console.log(mainText.replace('fill', 'five'));
console.log(mainText); // doesn't repalce the original String.

// replaceAll() which change the all occurence - but doesn't get supported by many browsers.


/*      REPEAT     */

let single = "Hello ";
console.log(single.repeat(5)); // 5 times of single's value