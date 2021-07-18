const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/': {
            const fileStream = fs.createReadStream(__dirname + '/content/big.txt', 'utf8')
            fileStream.on('open', () => {
                fileStream.pipe(res);
            })

            fileStream.on('error', (error) => {
                console.log(error);
                res.end('Error');
            })

            break;
        };
        case '/about': {
            res.end('About page');
            break;
        };
        default: {
            res.end(`
                <h1>404</h1>
                <p>We can't seem to find the page you are looking for</p>
                <a href="/">Back home page</a>
            `);
            break;
        };
    } 
});

server.listen(3000);