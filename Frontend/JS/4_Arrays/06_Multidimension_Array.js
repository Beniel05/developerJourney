let xo = [
    ['O', null, 'X'],
    [null, 'O', 'X'],
    ['X', 'O', 'X']
]
// console.log(xo);


for(let i in xo) {
    console.log(xo[i]);
}
/*
i = "0"
i = "1"
i = "2"
*/

console.log("==================");

for(let i of xo) {
    console.log(i);
}
/*
i = ['O', null, 'X']
i = [null, 'O', 'X']
i = ['X', 'O', 'X']
*/