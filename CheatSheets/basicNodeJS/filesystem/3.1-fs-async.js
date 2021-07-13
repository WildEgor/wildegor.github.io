// const { readFileSync } = require('fs');
const { join } = require('path');
const fs = require('fs');

console.log('Start sync action...');

const pathToContent = join(__dirname, 'content');

const contFile = fs.readFileSync(join(pathToContent, 'content.txt'), 'utf8');
const subContFile = fs.readFileSync(join(pathToContent, 'subcontent', 'subcontent.txt'), 'utf8');

fs.writeFileSync(join(pathToContent, 'result-sync.txt'), `Here is the result : ${contFile}, ${subContFile}`, { flag: 'a' });

console.log('Done sync action!');
console.log('Starting the next task...');