const Post=require("../modles/postmodel");

exports.deleteblogs= async function(req,res)
{


    try {
        
        const {id} =req.params;
        
            const response=await Post.findByIdAndDelete(id,
                {new:true});

                res.status(200).json(
                    {
                        status:"post deleted successfully",
                        response:response,
                    }
                );
            
        
    } catch (error) {
        res.status(500).json(
            {
                status:"post deleted unsuccessful",
                error:error
            }
        );
        
    }



}