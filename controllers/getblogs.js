
const post=require("../modles/postmodel");


exports.getblogs=async function(req,res)
{
    try {
        
   
    
    const response=await post.find().populate("comment")
    .exec();  
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