const mongoose=require('mongoose');  
require('dotenv').config()

//Connecting db
mongoose.connect(process.env.MongoDB_URL).then(()=>{
    console.log('Connection established')
}).catch(()=>{
    console.log('Connection error')
})