let express = require('express')
let app = express()

router = require('./router/router')
const mongoose = require('mongoose');

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(router) 

mongoose.connect('mongodb://127.0.0.1:27017/godrive', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database', error);
  });

  app.listen(4500)