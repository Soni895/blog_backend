const post=require("../modles/postmodel");
const { createcomment } = require("./createcomment");

exports.createblogs=async function(req,res)
{
    try {
        
        const {title,body}=req.body;
    const createblogs= new post(
        {
            title,body,

        }
    );
    const response=await createblogs.save();
    res.status(200).json(
        {
            response:response,
            status:"successfull",
        }
    )
    
    } catch (error) {
   res.status(500).json(
    {
        error:error,
        status:"post request unsuccessful"

    }
   )
        
    }


}