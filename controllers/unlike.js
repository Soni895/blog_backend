const Post=require("../modles/postmodel");
const Like=require("../modles/likemodel");

exports.unlike=async(req,res)=>
{

    try{
        const {like,post}=req.body;
      const deletelike= await Like.findOneAndDelete({
            post:post,_id:like
        });
        const udpatedPost= await Post.findByIdAndUpdate
        (post,{$pull:{like:deletelike._id}},{new :true,} );


        res.status(200).json(
            {
          
                update_post:udpatedPost, 
                status :"UnLike successfull",
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