const express = require('express');

const app = express(); //creating an instance of a expressjs application

const {adminAuth, userAuth} = require("./middlewares/auth");

// app.use("/test", (req,res)=>{
//     res.send("Hello from the server");  //Request handler function
// })

app.use("/admin",adminAuth,
(req,res)=>{
    res.send("Admin here");
}
)

app.get("/user",userAuth,
    (req,res,next)=>{
    console.log("Entered get");
    next();
    res.send({firstName:"Anupam", lastName:"Mishra"});
})

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

    res.send("Query::",req.query);
    
})

app.get("/user/:userId",(req,res)=>{
    console.log("Params part:: ", req.params);   

    res.send("Params:",req.params);
})

app.listen(3000, ()=>{
    console.log("Server started successfully at port 3000");
    
});