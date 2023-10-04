const mongoose=require("mongoose");
const Text=require("./models/text.js");

main()
.then(()=>{
    console.log("connected succussfully");
})
.catch((err)=>console.log("err:",err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/chatsys");
}

let alltexts=[
    {
    from:"Steven-Event Organiser Asst Head",
    to:"Taylor-Flower vendor",
    msg:"Send me the quatity of flowers required",
    created_at:new Date()
},
{
    
    from: 'Steven-Event Organiser Asst Head',
    to: 'Taylor-Flower vendor',
    msg: 'Send me the quantity of flowers required',
    created_at: new Date(),
  },
  {
  
    from: 'Sarah-Event Planner',
    to: 'Jack-Caterer',
    msg: 'Confirm the menu for the event',
    created_at: new Date(),
  },
  {
   
    from: 'Mike-Event Coordinator',
    to: 'Ginny-Decorator',
    msg: 'What color theme should we use for the decorations?',
    created_at: new Date(),
  },
  {
    from: 'Chris-Event Technician',
    to: 'Angela-Sound Engineer',
    msg: 'Check the audio equipment for the main stage',
    created_at: new Date(),
  },
  {
    
    from: 'Linda-Event Marketing Manager',
    to: 'Tom-Photographer',
    msg: 'We need more promotional photos for the event',
    created_at: new Date(),
  },
];
Text.insertMany(alltexts);