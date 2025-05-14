const mongoose=require('mongoose')
const schema=mongoose.Schema({
    title:String,
    description:String,
    imageurl:String
})
const blogdata=mongoose.model('blog',schema);
module.exports=blogdata