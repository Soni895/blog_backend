const Post= require("../modles/postmodel");
const Comment=require("../modles/commentmodel");

exports.deletecomment= async function(req,res)
{

    try {
       
        const {post_id,comment_id}=req.body;
        const deleted_comment=await Comment.findOneAndDelete({
            post:post_id,
            _id:comment_id});
        
        const updated_post= await Post.findByIdAndUpdate(
        post_id,{$pull:{comment:deleted_comment._id}},{new :true,} 
        );

        res.status(200).json(
            {
          
                updated_post:updated_post,
                deleted_comment:deleted_comment,
                status :"comment delete successfull",
            }
        )
        
    } catch (error) {
        res.status(500).json(
            {
                status:"comment delete Unsuccessful",
                error:error
            }
        );

        
    }
   

}