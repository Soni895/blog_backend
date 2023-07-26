const Post=require("../modles/postmodel");
const like=require("../modles/likemodel");

exports.like=async(req,res)=>
{

    try{
        const {user,post}= req.body;
        const createlike= await like.create(
            {
                user,post
            }
        );
        // const response= await createlike.save();
        const update_post=await Post.findByIdAndUpdate(post,
            {$push:{like:createlike._id}},
            {new: true})
            // .populate("comment")
            // .exec(); 

        res.status(200).json(
            {
                response:createlike,
                update_post:update_post, 
                status :"like saved successfull",
                user:user,
                post:post,
            }
        )
    }
     catch(error){
        res.status(500).json(
            {
                error:"like not  saved",
            }
        );
    }

}