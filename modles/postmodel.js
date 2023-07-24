const mongoose=require("mongoose");
const postschema= new mongoose.Schema({

title:
{
    type:String,
    require:true,
},
body:
{
    type:String,
    require:true,
},
like:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"like",

}]
,
comemnt:
[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"comment",
}]


    
});


module.exports=mongoose.model("post",postschema);
