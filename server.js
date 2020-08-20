
const express = require('express')
const app = express();
require('./config/mongoose')



const router = require('./config/router');
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));
app.set('view engine','ejs')




app.use(router)
app.listen(7000)