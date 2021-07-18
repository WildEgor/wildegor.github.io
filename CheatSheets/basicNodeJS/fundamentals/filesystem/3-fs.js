// const { readFileSync } = require('fs');
const { join } = require('path');
const fs = require('fs');

const pathToContent = join(__dirname, 'content');
console.log(pathToContent);

const contFile = fs.readFileSync(join(pathToContent, 'content.txt'), 'utf8');
const subContFile = fs.readFileSync(join(pathToContent, 'subcontent', 'subcontent.txt'), 'utf8');

// fs.writeFileSync(join(pathToContent, 'result-sync.txt'), `Here is the result : ${contFile}, ${subContFile}`, { flag: 'a' });

console.log('Start async action...');
fs.readFile(join(pathToContent, 'content.txt'), 'utf8', (err, res) => {
    if (err) {
        console.log(err);
        return;
    }
    const contFile = res;
    fs.readFile(join(pathToContent, 'subcontent', 'subcontent.txt'), 'utf8', (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        const subContFile = res;

        fs.writeFile(
            join(pathToContent, 'result-async.txt'), 
            `Here is the result : ${contFile}, ${subContFile}`,
            (err, res) => {
                if (err) {
                    console.log(error);
                    return;
                }
                console.log('Done with asyn task!');
            }
        );
    })
})

console.log('Starting next task...');


