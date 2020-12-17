console.log(process.argv);
const fs = require('fs');
const generatePage = require('./src/page-template.js');
//profileDataArgs is an array that holds data input from the command line
//slice removes first 2 indexes of process.argv array because they are file paths
const profileDataArgs = process.argv.slice(2, process.argv.length);
const [name, github] = profileDataArgs

fs.writeFile('Index.html', generatePage(name, github), err => {
    if (err) throw err;

    console.log('Portfolio complete! Check out index.html to see the output');
});
