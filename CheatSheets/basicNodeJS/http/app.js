const http = require('http');

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/': {
            res.end('Welcome to our home page');
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