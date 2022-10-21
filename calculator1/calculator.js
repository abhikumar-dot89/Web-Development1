const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req,res){
  var num1=Number(req.bodyParser.num1);
  var num2=Number(req.bodyParser.num2);

  function calculate(num1,num2,operate){
            if(operate==add){
              return num1 +num2;
            }else if(operate==substract) {
              return num1 - num2;
            }else if(operate==multiply) {
              return num1 * num2;
            }else if(operate==divide) {
              return num1/num2;
            }else {
              return NaN;
            }


  }
})





app.listen("3000", function(){
  console.log("Calculator started");
})
