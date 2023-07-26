const post=require("../modles/postmodel");
const comment=require("../modles/commentmodel");

exports.createcomment=async(req,res)=>
{

    try{
        const {user,body,post:Post}=req.body;
        const createcomment= new comment(
            {
                Post,user,body
            }
        );
        const response= await createcomment.save();
        const update_data=await post.findByIdAndUpdate(Post,
            {$push:{comment:response._id}},
            {new: true}
            )
            .populate("comment")
            .exec(); 



        res.status(200).json(
            {
                response:response,
                update_data:update_data, 
                status :"comment saved successfull",
            }
        )
    }
     catch(error){
        res.status(500).json(
            {
                error:"comment saved successfull",
            }
        );
    }
   


    


}