import figlet from 'figlet';
import colors from 'colors';

const getFiglet = async() => {
    const text = await figlet.text("Hello World!");
    // Printing the figlet text - with colors.
    console.log(colors.rainbow(text));
}

getFiglet();