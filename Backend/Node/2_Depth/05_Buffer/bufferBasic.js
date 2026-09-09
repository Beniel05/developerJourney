const { Buffer } = require("node:buffer");

// const buf = Buffer.alloc(4);
// console.log(buf);
// buf[1] = 10;
// console.log(buf);

const str = "Hello World";
const buf1 = Buffer.from(str);
// console.log(buf1);
// console.log(buf1.toString());

// const buf2 = Buffer.allocUnsafe(10);
// console.log(buf2);

const buf3 = Buffer.alloc(10);
buf3.write("Hello");
// console.log(buf3);
// console.log(buf3.toString());
// console.log(buf3.toSorted());
// console.log(buf3.toSorted().toString());
// console.log(buf3.toString());

const buf4 = Buffer.from("Developer Journey");
// console.log(buf4.toString("utf-8", 0, 9));

const buf5 = Buffer.from("Developer");
// console.log(buf5);
// buf5[0] = 0x6C; // l - (small 'l')
// console.log(buf5);
// console.log(`${buf5.toString()} ...LOL`);

const buff1 = Buffer.from("Developer ");
const buff2 = Buffer.from("Journey");
const buff3 = Buffer.concat([buff1, buff2]);
console.log(buff3.toString());
console.log(buff3.length);