const crypto = require('crypto');
const util = require('util');

const startTime = process.hrtime();

process.env.UV_THREADPOOL_SIZE = 4; // up to 128

for (let i = 0; i < 8; i++) {
    crypto.pbkdf2('secret', 'salt', 100000, 512, 'sha256', err => {
        if (err) throw err;
        const endTime = process.hrtime(startTime);
        console.log(util.format(`crypto %d startTime %d and %d execute %d`, i, endTime[0], endTime[1], endTime[0] + endTime[1] / 1e9));
    });
}