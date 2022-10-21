const express=require("express");
const app=express();




app.get("/", function(req,res){
  res.send("Server started");
})
app.listen(3000,function(){
  console.log("Server started")
;});
