const post=require("../modles/postmodel");
const like=require("../modles/likemodel");

exports.like=async(req,res)=>
{

    try{
        const {user,post:Post}=req.body;
        const createlike= new like(
            {
                user,Post
            }
        );
        const response= await createlike.save();
        const update_data=await post.findByIdAndUpdate(Post,
            {$push:{like:response._id}},
            {new: true})
            .populate("comment")
            .exec(); 



        res.status(200).json(
            {
                response:response,
                update_post:update_data, 
                status :"comment saved successfull",
            }
        )
    }
     catch(error){
        res.status(500).json(
            {
                error:"comment not  saved",
            }
        );
    }
   


    


}