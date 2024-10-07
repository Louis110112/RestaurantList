const express = require('express')
const app = express()
const port = 3009

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(port, () => {
    console.log(`1ex express server on http://localhost:${port}`)
})