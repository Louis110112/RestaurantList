const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const port = 8080
const restaurantlist = require('./public/jsons/restaurant.json').results
const BASE_IMG_URL = 'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/'

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.redirect('/restaurantlist')
})

app.get('/restaurantlist', (req, res) => {
    res.render('index', { restaurantlist, BASE_IMG_URL },)
})

app.get('/restaurantlist/:id', (req, res) => {
    const id = req.params.id
    const restaurant = restaurantlist.find((item) =>
        item.id.toString() === id)
    res.render('show', { restaurant })

})

app.listen(port, () => {
    console.log(`1ex express server on http://localhost:${port}`)
})