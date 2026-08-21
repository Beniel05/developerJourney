function changeBGColor(color, delay) {
    return new Promise((res) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            res();
        }, delay);
    })
}

// changeBGColor('red', 1000)
// .then(() => changeBGColor('orange', 1000))
// .then(() => changeBGColor('yellow', 1000))
// .then(() => changeBGColor('green', 1000))
// .then(() => changeBGColor('blue', 1000))
// .then(() => changeBGColor('indigo', 1000))
// .then(() => changeBGColor('violet', 1000))


// Using await
async function rainbow() {
    await changeBGColor('red', 1000)
    await changeBGColor('orange', 1000)
    await changeBGColor('yellow', 1000)
    await changeBGColor('green', 1000)
    await changeBGColor('blue', 1000)
    await changeBGColor('indigo', 1000)
    await changeBGColor('violet', 1000)
    return "Completed."
}

// rainbow().then((res) => console.log(res))

async function printRainbow() {
    await rainbow().then((res) => console.log("Response from the function: " + res));
    console.log("End of the program");
}

printRainbow();