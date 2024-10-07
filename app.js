const express = require('express')
const app = express()
const port = 3009

app.get('/', (req, res) => {
    res.redirect('/restaurantlist')
})

app.get('/restaurantlist', (req, res) => {
    res.send('LIST')
})

app.listen(port, () => {
    console.log(`1ex express server on http://localhost:${port}`)
})