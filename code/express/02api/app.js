// 使用express框架中的路由来快速实现接口功能// 使用express框架中的路由来快速实现接口功能

const express = require('express');

const app1 = express();

// 路由： 请求的方式是get,请求的路径是 /abc, 回调函数是(req,res)=>{}
app1.get("/abc",(req,res)=>{
    res.send("ok")  
})


app1.post("/abc",(req,res)=>{
    // res.send("post-abc")  
    res.send({code:200,data:[1,2,3]})  
})


app1.listen(8000,()=>{
    console.log("8000已经启动"); 
})