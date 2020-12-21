const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            //if  theres an error, reject promis and send the error to the promises .catch() method
            if (err) {
                reject(err);
                return;
            }
            //if no error, resolve and send to .then() method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};
const copyFile = () => {
    return new Promise((resolve,reject) => {
        fs.copyFile('./src/style.css', './dist/style.css' err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File copied successfully!'
            });
        });
    });
};
module.exports = { writeFile, copyFile };