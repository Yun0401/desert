const mongoose = require('mongoose');

const processTemp = new mongoose.Schema({
    person: {
        type:String,
        required:true
    },
    process: {
        type:String,
        required:true
    },
    part: {
        type:String,
        required:true
    },         
    time: {
        type:String,
        required:true
    }     
})

module.exports = mongoose.model('mytable',processTemp);