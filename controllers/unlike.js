const Post=require("../modles/postmodel");
const Like=require("../modles/likemodel");

exports.unlike=async(req,res)=>
{

    try{
        const {like_id,post_id}=req.body;
      const deletelike= await Like.findOneAndDelete({
            post:post_id,_id:like_id
        });
        const udpatedPost= await Post.findByIdAndUpdate
        ({_id:post_id},{$pull:{like:deletelike._id}},{new :true,} );

        res.status(200).json(
            {
          
                update_post:udpatedPost, 
                status :"UnLike successfull",
                deletelike:deletelike,
            }
        )
    }
     catch(error){
        res.status(500).json(
            {
                error:"Unlike Unsuccessful",
            }
        );
    }

}