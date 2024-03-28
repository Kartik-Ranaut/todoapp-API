const todoData= require("../models/TodoData");


exports.gettodo = async(req,res)=>{
    try{
        const response=await todoData.find({});
        res.status(200).json({
            sucess:true,
            data:response,
            message:"done fetching"
        });
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            sucess:false,
            data:error,
            message:"fetching failed"
        })
    }
}