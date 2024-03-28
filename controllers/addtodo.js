const todoData= require("../models/TodoData");


exports.addtodo = async(req,res)=>{
    try{
        const {title} =req.body;
        const response=await todoData.create({title});
        res.status(200).json({
            sucess:true,
            data:response,
            message:"data entered sucessfully"
        });
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            sucess:false,
            data:error,
            message:"data entering failed"
        })
    }
}