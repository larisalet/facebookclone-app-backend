const express = require('express')
const bodyParser = require('body-parser');
const port = process.env.PORT || 80;

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Saluuut!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})