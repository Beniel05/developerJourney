const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


for (let link of allLinks) {
    link.style.color = 'rgb(136, 0, 255)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecoration = 'overline';
    link.style.textDecorationStyle = 'double'
}
