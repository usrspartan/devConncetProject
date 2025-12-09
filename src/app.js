const express = require('express');
const app = express(); //creating an instance of a expressjs application
// const {adminAuth, userAuth} = require("./middlewares/auth");
const connect = require("./config/database");
const User = require('./models/user');
//writing APIs 
//signup api
app.use(express.json());

app.post('/signup',async(req,res)=>{

    const user = new User(req.body);

    try {
        await user.save();
        res.send("User added successfully");        
    } catch (error) {
        res.status(400).send("Error sending user",error.message);
    }
});

//Get one user by email
app.get('/user', async(req,res)=>{

    // console.log(req.body.emailId);
    
    const userEmail = req.query.emailId;
    try {
     const user = await User.find({emailId : userEmail})

     if (user.length===0) {
        res.status(404).send("User not found");
     }
     res.send(user);   
    } catch (error) {
        res.status(400).send(error.message);
    }
});

//Feed API- GET API - Get all the data from the database
app.get('/feed', async(req,res)=>{
    try {
        const users = await User.find({});
        if (users.length===0) {
        res.status(404).send("User not found");
     }

     else{
        res.send(users);
     }
    } catch (error) {
        res.status(400).send(error.message);
    }
});

//Delete API
//find by id and delete
app.delete("/user/:userId",async(req,res)=>{
    const userId = req.params.userId;

    try {
        await User.findByIdAndDelete(userId);
        res.send("User successfully deleted");
    } catch (error) {
        res.status(400).send(error.message);
    }
    
});

//Update data of the user

app.patch("/user/:id",async(req,res)=>{
    const userId = req.params.id;
    const data = req.body;

    console.log("Updating user:", userId, "with data:", data);

    try {
        const user = await User.findByIdAndUpdate(userId,data, {
            returnDocument:'after',
            runValidators: true,
        });
        res.send("User details updated successfully");
    } catch (error) {
        res.status(400).send("Something went wrong, can't update");
    }
});





connect().then(
    ()=>{
        console.log("Database connection successful");

        app.listen(3000, ()=>{
        console.log("Server started successfully at port 3000");
    });
})
.catch((err)=>{
    console.log("Something went wrong in connecting to the database");
});
