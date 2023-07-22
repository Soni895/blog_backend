const createroute=require("../controllers/createblogs");
const getblogs=require("../controllers/getblogs");
const updateblogs=require("../controllers/updateblogs");
const deleteblogs=require("../controllers/deleteblogs");
const express = require('express');
const router = express.Router();

router.get("/getblogs",getblogs);
router.put("/updateblogs",updateblogs);
router.post("/createroute",createroute);
router.delete("/deleteblogs",deleteblogs);

module.exports=router;