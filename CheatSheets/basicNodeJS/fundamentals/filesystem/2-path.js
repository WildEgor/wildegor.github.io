const path = require('path');

console.log(path.sep);

const filePath = path.join('/content', '/subcontent', 'test.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absosule = path.resolve(__dirname, '');
console.log(absosule);