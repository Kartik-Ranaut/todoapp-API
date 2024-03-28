const mongoose = require('mongoose');
require('dotenv').config();
exports.dbconnect =()=>{
    mongoose.connect(process.env.Database_url,{
    }).then(()=>{console.log('congratulations your database is connected and the database name is todoproject')})
    .catch((error)=>{console.log(error)});
}