

const mongoose = require('mongoose');
const dburl = 'mongodb+srv://zek0ooo:zek0ooo.123@pachachaca.ozt4p.azure.mongodb.net/Tweeter?retryWrites=true&w=majority';


mongoose.connect(dburl,{useNewUrlParser:true, useUnifiedTopology: true})
.then((result) => {console.log('connect to db')})
.catch((err)=>{console.log(err)})
