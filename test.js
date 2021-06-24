const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const passport = require('./config/passwordConfig')
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');
const session = require('express-session');
const MongoStore = require('connect-mongo');


const connection = 'mongodb+srv://larisa:userlarisa@cluster0.rbh92.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const port = process.env.PORT || 3001;

const app = express()
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(postRoutes);
app.use(userRoutes);
app.use(passport.initialize());
app.use(
  session({
    secret: 'cevaparola',
    resave: false,
    saveUnitialized: true,
    store: MongoStore.create({
      mongoUrl: 'mongodb+srv://larisa:userlarisa@cluster0.rbh92.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    }),
    Unset: "destroy",
  })
);
app.use(passport.session());

mongoose.connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,    
}).catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})