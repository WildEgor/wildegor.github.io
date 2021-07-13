const quickSort = require('./utils');

function generateRandomArray() {
    function random(min, max){
        return Math.floor(Math.random()*((max - min) + min))
    }

    const startTime = Date.now();
    const rawArray = Array(2).fill().map(_ => random(0, 99999));

    const sortedArray = quickSort(rawArray);
    const endTime = (Date.now() - startTime) / 1000;

    console.log('Finish time - ', (Date.now() - startTime) / 1000);
};

generateRandomArray();