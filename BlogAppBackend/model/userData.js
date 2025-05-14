const mongoose=require('mongoose')
const schema=mongoose.Schema({
    username:String,
    email:String,
    password:String
})
const UserData=mongoose.model('userdetail',schema);
module.exports=UserData