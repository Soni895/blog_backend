const mongoose=require("mongoose");
const blogschema= new mongoose.Schema(
    {
        Title:
        {
            type:String,
            required:true,
            maxlength:100,

        },
Description:
        {
            type:String,
            required:true,
            maxlength:100,

        },
        CraetedAt:
        {
            type:Date,
            required:true,
            default:Date.now()
        },
        UpdatedAt:
        {
            type:Date,
            required:true,
            default:Date.now()

        }
    }
);

// const blogs=mongoose.model("blogs",blogschema);
module.exports=mongoose.model("blogs",blogschema);