const mongoose=require("mongoose");

const textSchema=new mongoose.Schema({
from:{
    type:String,
    required:true,
},
to:{
    type:String,
    required:true,
},
msg:{
    type:String,
    maxLength:100, 
},
created_at:{
    type:String,
    required:true,
},
});
const Text=mongoose.model("Text",textSchema);
module.exports=Text;