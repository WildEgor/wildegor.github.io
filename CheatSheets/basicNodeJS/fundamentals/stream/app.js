const { createReadStream } = require('fs')

const stream = createReadStream(__dirname + '/content/big.txt', { highWaterMark: 1024, encoding: 'utf8' })

stream.on('data', (data) => {
    console.log(data);
})