const express = require("express");
const parser = require("body-parser");
const app = express();

app.use(parser.urlencoded({extended : true }));


app.get("/",function(req,res){

	res.sendFile(__dirname + "/index.html");
}
);

app.post("/",function(req,res){
	var num1 = Number(req.body.num1);
	var result = num1+ 10;
	res.send( result);
}
);

app.listen(3000,function(){
	console.log("started");
});
