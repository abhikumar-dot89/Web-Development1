const express=require("express");
const bodyParser=require("body-parser");
const app=express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){


  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"

  };
  var today =new Date();
  var day =today.toLocaleDateString("en-US", options);
  res.render("list", {whichDay: day});

});

app.post("/", function(req,res){
  var item =req.body.newitem;
  console.log(item);
})






app.listen(3000, function(req,res){
  console.log("Server running on port no 3000");
})
