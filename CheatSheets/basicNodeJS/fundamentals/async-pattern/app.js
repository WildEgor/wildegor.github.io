const { 
    readFile, 
    // writeFile 
} = require('fs');
const { promisify } = require('util');

const readFilePromise = promisify(readFile);
// const writeFilePromise = promisify(writeFile);

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) reject(err);
//             resolve(data);
//         })
//     })
// }

// getText(__filename).then((r) => { console.log(r); }).catch(err => {console.log(err)});

const asynFunc = async (path) => {
    try {
        const data = await readFilePromise(path, 'utf8');
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

asynFunc(__filename);