const fs = require('fs');

console.log('1. Start processing...'); // (1)

setTimeout(function () {
    console.log('2. setTimeout 1');
}, 0); // (5)

setImmediate(function () {
    console.log('3. setImmediate');
}); // (7)

fs.readFile(__filename, function () {
    setTimeout(function () {
        console.log('4. readFile');
    }) // (10)

    setImmediate(function () {
        console.log('5. readFile setImmediate'); // (9)
    });

    process.nextTick(function () { console.log('6. setImmediate'); }) // (8)
})

Promise.resolve()
.then(function (){
    console.log('7. Promise');
    process.nextTick(function () { console.log('8. Promise'); })
}) // (4)

process.nextTick(function () { console.log('9. Next tick single')}); // (3)


setTimeout(function () {
    console.log('10. setTimeout 2');
}, 0); // (6)

console.log('11. ...end'); // (2)