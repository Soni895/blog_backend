const Post=require("../modles/postmodel");
const Comment=require("../modles/commentmodel");

exports.createcomment=async(req,res)=>
{

    try{
        const {user,body,post}=req.body;
        const createcomment= new Comment(
            {
                post,user,body
            }
        );
        const response= await createcomment.save();
        const update_post=await Post.findByIdAndUpdate(post,
            {$push:{comment:response._id}},
            {new: true})
            .populate("comment")
            .exec(); 



        res.status(200).json(
            {
                response:response,
                update_post:update_post, 
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