const comment=require("../modles/commentmodel");
const Post=require("../modles/postmodel");

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

        //find the id of new comment and save it to the post comment  array

       const updatedpost = await Post.findByIdAndUpdate(post,
        {$push:{comment:savecomment.id}},
        {new :true})
        .populate("comment")
        .exce();

        res.json(
            {
                post:updatedpost,

            }
        );
        
    } 
    catch (error) {
        res.status(500).json(
            {
                error:"comment not save"
            }
        );



    }
}
