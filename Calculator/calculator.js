const express = require("express");

const app = express();

app.get("/", function(req,res){
  res.send("Hello");
})

app.get("/contact", function(req,res){
  res.send("Contact me at abhishek89.com");
})

app.listen(3000,function(){
  console.log("Server started on port number 3000");
});
