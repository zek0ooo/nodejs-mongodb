


const moon = require('mongoose');
const Schema = moon.Schema;

const tweetSchema = new Schema({
    name:{
        type: String,
        required: true,
        minlength:20,
        
    },
    message:{
        type: String, 
        required: true,
        maxlength:50
    }
}, {timestamps: true})


const Tweet = moon.model('Tweet',tweetSchema )
module.exports = {
    Tweet
};
