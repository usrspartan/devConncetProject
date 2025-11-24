const express = require('express');

const app = express(); //creating an instance of a expressjs application

app.use("/hello", (req,res)=>{
    res.send("Hello Hello Hello Hello");  //Request handler function
})


app.use("/nodemon", (req,res)=>{
    res.send("Hello Hello Hello from  doremon");  //Request handler function
})


app.use("/test", (req,res)=>{
    res.send("Hello from the server");  //Request handler function
})

app.listen(3000, ()=>{
    console.log("Server started successfully at port 3000");
    
});