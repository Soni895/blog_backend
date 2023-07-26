const {createblogs}=require("../controllers/createblogs");
const {getblogs}=require("../controllers/getblogs");
const {updateblogs}=require("../controllers/updateblogs");
const {deleteblogs}=require("../controllers/deleteblogs");
const {like}=require("../controllers/like");
const {unlike}=require("../controllers/unlike");
const {createcomment}=require("../controllers/createcomment");
const {deletecomment}=require("../controllers/deletecomment");
const express = require('express');
const router = express.Router();


router.get("/getblogs",getblogs);
// router.put("/updateblogs",updateblogs);
router.post("/createblogs",createblogs);
// router.delete("/deleteblogs",deleteblogs);
router.post("/like",like);
// router.put("/unlike/:id",unlike);

// router.post("/deletecomment",deletecomment);
// router.post("/createcomment",createcomment);
router.post('/createcomment',createcomment);
module.exports=router;