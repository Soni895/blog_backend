const mongoose=require("mongoose");
const commentschema= new mongoose.Schema(

    {
        post:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "post", //reference to the post model
        },
        user :  
        {
            type:String,
            required:true,

        },
        body:
        
        {
            type:String,
            required:true,
        }


    }
);

module.exports=mongoose.model("comment",commentschema);
