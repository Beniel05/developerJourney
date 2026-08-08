'use strict';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// Have to apply the index color to each letters.

const spans = document.querySelectorAll('span'); // [...] Node list.

for(let i = 0; i < colors.length; i++) {
    
    // let indexColor = colors[i];
    // spans[i].style.color = indexColor;

    spans[i].style.color = colors[i];
}