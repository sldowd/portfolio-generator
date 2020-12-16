//profileDataArgs is an array that holds data input from the command line
//slice removes first 2 indexes of process.argv array because they are file paths
const profileDataArgs = process.argv.slice(2, process.argv.length);
const [name, github] = profileDataArgs;

//code to use file system module
const fs = require('fs');

//function that writes html with commande line data from user
const generatePage = (name, github) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
    </head>

    <body>
        <h1>${name}</h1>
        <h2><a href="https://github.com/${github}"</a><Github/h2>
    </body>
    </html>
        `;
};
fs.writeFile('Index.html', generatePage(name, github), err => {
    if (err) throw err;

    console.log('Portfolio complete! Check out index.html to see the output');
});
