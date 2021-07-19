const express = require('express')
const path = require('path')
const { products } = require('./data')

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next()
}

const app = express()

app.use(express.static(path.resolve(__dirname, './public')))
app.use('/api', logger);

app.get('/api/products', (req, res) => {
    const newProducts = products.map(product => { 
        return {
            id: product.id,
            order: product.order,
            price: product.price, 
            name: products.name, 
            // desc: product.desc 
        }
    })

    res.json(newProducts);
})

app.get('/api/products/:id', (req, res) => {
    console.log(req.params);
    const singleProd = products.find(product => product.id === Number(req.params.id))

    res.json(singleProd);
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params)
    res.send('Review');
})

app.get('/home', (req, res) => {
    res.send('Home page middleware')
})

app.listen(5000, () => {
    console.log(`Server listen on port 5000`);
})