const Post=require("../modles/postmodel");

exports.updateblogs= async function(req,res)
{


    try {
        const {body,title}=req.body;
        const {id} =req.params;
        
            const response=await Post.findByIdAndUpdate(id,
                {
                    body,title
                });

                res.status(200).json(
                    {
                        status:"post Update",
                        response:response,
                        id:id

                    }
                );
            
        
    } catch (error) {
        res.status(500).json(
            {
                status:"post Update unsuccessful",
                error:error
            }
        );
        
    }



}