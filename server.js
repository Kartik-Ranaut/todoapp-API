const express =require('express');
const app=express();
require('dotenv').config();
var cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);
app.listen(process.env.Port,()=>{
    console.log(`server started at ${process.env.Port}`)
})

app.use(express.json());
const {dbconnect} = require("./Database");
dbconnect();
app.get('/',(req,res)=>{
    res.send("<h1>We welcome you all in this new project</h1>")
})

const routers = require("./routes/todo");
app.use("/",routers);