const todoData= require("../models/TodoData");


exports.deletetodo = async(req,res)=>{
    try{
        const {_id}=req.body;
        const response=await todoData.findByIdAndDelete(_id);
        res.status(200).json({
            sucess:true,
            data:response,
            message:"done deletion"
        });
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            sucess:false,
            data:error,
            message:"deletion failed"
        })
    }
}