// XHR (aka) XMLHttpRequest

// https://swapi.dev/api/people/1/
// https://swapi.tech/api/people/1/

const req = new XMLHttpRequest();

req.onload = function() {
    console.log("LOADED");
    const data = JSON.parse(this.response);
    console.log(data);
    console.log(`Name: ${data.name}\nGender: ${data.gender}\nHairColor: ${data.hair_color}`);
}

req.onerror = function() {
    console.log("ERROR");
    console.log(this);
}

req.open("GET", "https://swapi.dev/api/people/1/");
req.send();