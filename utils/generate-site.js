const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if theres an error, reject the Promise and send the rror to the Promises `.catch()` method
            if (err) {
                reject(err);
                //return out of the function here to make sure the Promise doesnt accidentally execute the resolve() function as well
                return;
            }

            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
};

const copyFile = fileType => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./dist/index.html', fileType, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File copied!'
            });
        });
    });
};

module.exports = { writeFile, copyFile };

