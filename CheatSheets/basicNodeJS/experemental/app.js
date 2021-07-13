
const { Worker } = require('worker_threads');
const express = require('express');
// const quickSort = require('./utils');

const app = express();

// function generateRandomArray() {
//     function random(min, max){
//         return Math.floor(Math.random()*((max - min) + min))
//     }

//     const startTime = Date.now();
//     const rawArray = Array(200000).fill().map(_ => random(0, 99999));

//     const sortedArray = quickSort(rawArray);
//     const endTime = (Date.now() - startTime) / 1000;

//     console.log('Finish time - ', (Date.now() - startTime) / 1000);
//     return {
//         startTime,
//         endTime,
//         rawArray,
//         sortedArray
//     }
// };

app.get('/', (_, res) => {
    res.send('Welcome to main page :)');
});

app.get('/test', (_, res) => {
    res.send('Welcome to test page :)');
});

app.get('/benchmark', (req, res) => {
    // const result = generateRandomArray();
    // const used = Number(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);

    // console.log(`Memory [benchmark] used - ${used} Mb`);

    const worker = new Worker(__dirname + '/worker.js', { workerData: null });

    worker.on('message', message => {
        console.log('Message from worker - ', message);
        res.send('Finish!');
        const used = Number(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
        console.log(`Memory [benchmark-worker] used - ${used} Mb`);
    });

    worker.on('error', err => {
        console.error(`Worker error - ${err}`);
    });
    
    //res.send(`Finish with results: ${result.startTime} | ${result.endTime}`);
});

app.listen(5000, () => {
    console.log(`Server listenning on port 3000!`);
});