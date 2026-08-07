// Use Browser's Console to see the results.

const heading = document.getElementById('heading');
console.log(heading);

const allImages = document.getElementsByTagName('img');
console.log(allImages);

// Will change all elements to something else - Same to all.
for(let img of allImages) {
    img.src = "https://picsum.photos/200";
}

/*
/ Historically, there are three common DOM collections:

* querySelectorAll() return - NodeList
* getElementsByClassName() return - HTMLCollection
* getElementsByTagName() return -  HTMLCollection

For example:
document.querySelectorAll(".done");       // NodeList
document.getElementsByClassName("done");  // HTMLCollection
document.getElementsByTagName("li");      // HTMLCollection
*/




/*
const allImages = document.getElementsByTagName('img');

for (let img of allImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
}


const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}

const links = document.querySelectorAll('p a');

for (let link of links) {
    console.log(link.href)
}
*/