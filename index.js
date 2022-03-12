const express=require("express")
const app=express()

app.get("/home",function(req,res){
    res.send("hello")

})

app.get("/book",function(req,res){
    res.send("4 books content data")
})

app.listen(5000,()=>{
    console.log("listening port 5000")
})
