
//admin authorization
const adminAuth = (req,res,next)=>{
    const token = "xyz";

    const isAuth = token==="xyz";
    if (isAuth) {
        next();
        console.log("Admin Authorization successful");
    }
    else
        res.sendStatus(401);
}

//user authorization
const userAuth = (req,res,next)=>{
    const token = "xyz";

    const isAuth = token==="xyz";
    if (isAuth) {
        next();
        console.log("User Authorization successful");
    }
    else
        res.sendStatus(401)
}

module.exports = {adminAuth,userAuth}