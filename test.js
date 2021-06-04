const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(port,() =>{
    console.log(`example app listening at http://localhost:${port}`)
})