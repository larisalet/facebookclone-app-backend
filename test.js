const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const postRoutes = require('./routes/postRoutes');

const connection = 'mongodb+srv://larisa:userlarisa@cluster0.rbh92.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const port = process.env.PORT || 3001;

const app = express()
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(postRoutes);

mongoose.connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,    
}).catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})