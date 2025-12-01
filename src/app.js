const express = require('express');
const app = express(); //creating an instance of a expressjs application
// const {adminAuth, userAuth} = require("./middlewares/auth");
const connect = require("./config/database");
const User = require('./models/user')
//writing APIs 
//signup api

app.post('/signup',async(req,res)=>{
    const user = new User({
        firstName: 'MS',
        lastName: 'Dhoni',
        emailId:'mahendra@dhoni.com',
        password:'dhoni@123'
    });

    try {
        await user.save();
        res.send("User added successfully");        
    } catch (error) {
        res.status(400).send("Error sending user");
    }
})


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


