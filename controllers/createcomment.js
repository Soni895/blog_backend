const Comment=require("../modles/commentmodel");
const Post=require("../modles/postmodel");

exports.createcomment=async (req,res)=>
{
    try {
        // fatch data
        const {post,user,body}=req.body;
        // craete comment
        const comment= new Comment(
            { 
                post,user,body
            }
        );
        // save object into data base
        const savecomment= await comment.save();

        //find the id of new comment and save it to the post comment  array

       const updatedpost = await Post.findByIdAndUpdate(post,
        {$push:{comment: savecomment._id}},
        {new: true})
        .populate("comment")
<<<<<<< HEAD
        // .exec();

=======
        .exec();
>>>>>>> f266708cd1e32001ff32860e3de8f0cadd3c8165

        res.json(
            {
                post:updatedpost,
                // post:post,
                // user:user,
                // body:body,
                // updatedpost:updatedpost,
                // savecomment:savecomment
            }
        );
        
    } 
    catch (error) {
       res.status(500).json(
            {
                error:"comment not save",
            }
        );
    }
}

