const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path");
const Text=require("./models/text.js");
const  methodOverride=require("method-override");
main()
.then(()=>{
    console.log("connected successfully");
})
.catch((err)=>console.log("err:",err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/chatsys");
}

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

app.get("/texts",async (req,res)=>{
let texts=await Text.find();
console.log(texts);
res.render("index.ejs",{texts});
});
app.get("/texts/:id/edit",async(req,res)=>{
let {id}=req.params;
let text=await Text.findById(id);
res.render("edit.ejs",{text});
});
app.put("/texts/:id",async (req,res)=>{
    let {id}=req.params;
    let {msg:newMsg}=req.body;
    let updatedchat=await Text.findByIdAndUpdate(id,{ msg:newMsg},{runValidators:true,new:true});
    console.log(updatedchat);
    res.redirect("/texts");
});
app.delete("/texts/:id",async(req,res)=>{
   let{id}=req.params;
   let deletedchat=await Text.findByIdAndDelete(id);
   console.log(deletedchat);
    res.redirect("/texts");
})
//create post
app.post("/texts",(req,res)=>{
let {from,to,msg}=req.body;
let newChat=new Text({
    from:from,
    to:to,
    msg:msg,
    created_at:new Date(),
});
newChat
.save()
.then((res)=>{
    console.log("chat saved");
})
.catch((err)=>console.log(err));
console.log(newChat);
// res.send("workinggg");
res.redirect("/texts");
});
// new route
app.get("/texts/new",(req,res)=>{
res.render("new.ejs");

});

app.get("/",(req,res)=>{
    res.send("Root is working");
});

app.listen(6008,()=>{
console.log("Server is listening to port");
});