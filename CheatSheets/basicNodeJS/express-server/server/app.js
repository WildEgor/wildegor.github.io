const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.resolve(__dirname, './public')))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.html'))
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>404</h1>')
})

app.listen(5000, () => {
    console.log(`Server listen on port 5000`);
})