const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const port = 3009

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');

app.use(express.static('public'))


app.get('/', (req, res) => {
    res.redirect('/restaurantlist')
})

app.get('/restaurantlist', (req, res) => {
    res.render('index')
})

app.get('/restaurantlist/:id', (req, res) => {
    const id = req.params.id
    res.send(`read restaurantlist${id}`)
})

app.listen(port, () => {
    console.log(`1ex express server on http://localhost:${port}`)
})