const mongoose= require('mongoose');

const todoData = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    Time:{
        type:Date,
        default:Date.now(),
        required:true,
    }
});

module.exports = mongoose.model("todoData",todoData);