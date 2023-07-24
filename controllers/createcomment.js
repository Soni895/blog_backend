const comment=require("../modles/commentmodel");
const post=require("../modles/postmodel");

exports.createcomment=async (req,res)=>
{
    try {
        // fatch data
        const {post,user,body}=req.body;
        // craete comment
        const Comment= new comment(
            {
                post,user,body
            }
        );

        // save object into data base
        const savecomment= await Comment.save();
        
    } 
    catch (error) {
        
    }
}