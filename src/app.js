const express = require('express');

const app = express(); //creating an instance of a expressjs application

// app.use("/test", (req,res)=>{
//     res.send("Hello from the server");  //Request handler function
// })

// app.get("/user",(req,res)=>{
//     res.send({firstName:"Anupam", lastName:"Mishra"});
// })

app.post("/user", (req,res)=>{
    console.log("Data posted successfully");
    res.send("User details updated");
})

app.delete("/user", (req,res)=>{
    console.log("Deletion activated");
    res.send("Item deleted successfully");
})

app.put("/user",(req,res) => {
    res.send("User details updated using put");
})

app.patch("/user",(req,res)=>{
    res.send("User details updated using patch");
})

app.get("/user",(req,res)=>{
    console.log("Query part:: ", req.query);
    
})

app.get("/user/:userId",(req,res)=>{
    console.log("Params part:: ", req.params);   
})

app.listen(3000, ()=>{
    console.log("Server started successfully at port 3000");
    
});