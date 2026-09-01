/* Just use 'node BoilerPlate.js Project_name' - to create html,css and js files */
const fs = require('fs');

// First two lines [0,1] for Paths. [2] is our passing argument (project name) 
const projectName = process.argv[2] || "New Project";

try {
    fs.mkdirSync(projectName);
} catch (e) {
    console.log("Folder already existed with the name:", projectName);
}

fs.writeFileSync(`${projectName}/index.html`, 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${projectName}</title>
</head>
<body>
    <h1>${projectName}</h1>
</body>
</html>
`);

fs.writeFileSync(`${projectName}/style.css`,
`* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}   
`);

fs.writeFileSync(`${projectName}/script.js`, '');
// But that second argument is compulsory - that's why left as empty.
// Instead of '' empty string - we can also have the boilder code of those files (html).

/*
~/OneDrive/Desktop/Dev Journey/Backend/Node/1_CrashCourse (main)
$ node BoilerPlate.js TestProject
*/