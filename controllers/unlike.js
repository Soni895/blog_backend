const Post=require("../modles/postmodel");
const like=require("../modles/likemodel");

exports.unlike=async(req,res)=>
{

    try{
        const {like,post}=req.body;
      const deletelike= await like.findOneAndDelete({
            post:Post,_id:Like
        });
        const deletelikefrompost= await post.findByIdAndUpdate
        (Post,{$pull:{like:deletelike._id}},{new :true,} );


        res.status(200).json(
            {
          
                update_post:deletelikefrompost, 
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