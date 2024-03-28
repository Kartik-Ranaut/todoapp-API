const express= require('express');

const router=express.Router();

const {addtodo}=require("../controllers/addtodo");
const {gettodo}=require("../controllers/gettodo");
const {deletetodo}= require("../controllers/deletetodo");
router.post("/v1/addpost",addtodo);
router.get("/v1/getpost",gettodo);
router.delete("/v1/deletepost",deletetodo);


module.exports=router;