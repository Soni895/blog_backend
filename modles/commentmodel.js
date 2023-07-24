const mongoose=require("mongoose");

const commentschema=new mongoose.Schema(
    {

post:
{
    type:mongoose.Schema.Types.ObjectId,
    ref:"post", // refereence to the post model
},
user:
{
    type:String,
    require:true,
},
body:{
    type:String,
    required:true,
}
    }
);


module.exports=mongoose.model("comment",commentschema);