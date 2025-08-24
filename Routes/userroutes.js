

const express = require("express")
const { signupuser, deluser, updateuser, getuser, login, assignroles, middle, } = require("../Controller/user.controller")
const { authentication } = require("../passport/passport middleware,js")
const { roleauthorization } = require("../Controller/role.authorization")


const userrouter = express.Router()


userrouter.post("/signup",async (req,res)=>{
    const data = req.body 
    const newdata = await signupuser(data)
    newdata ? res.status(200).json({newdata ,status : 1,message : "signup sucessfully user created"} ) : res.status(400).json({ message : "signup failed"})
})


userrouter.delete("/:userid",authentication,roleauthorization(["Admin"]),async (req,res)=>{
    const result = await deluser(Number(req.params.userid))
    result ? res.status(200).json({data : result, status : 1 , message : "user has been deleted sucessfully"}) : res.status(400).json({message : "deleted failed"})
})


userrouter.put("/:userid",authentication,roleauthorization(["Admin"]),async(req,res)=>{
    const data = await updateuser(Number(req.params.userid),req.body)
    data ? res.status(200).json({data ,message : "user update sucessfully"} ) : res.status(400).json({ message : "updation failed"})
})


userrouter.get("/:userid",middle,async (req,res)=>{
    const data = await getuser(req.params.userid)
       data ? res.status(200).json({data , status : 1} ) : res.status(400).json({ message : " failed"})

})





userrouter.post("/login",async (req,res)=>{
    const data = req.body 
    const newdata = await login(data)
    newdata ? res.status(200).json({newdata ,status : 1,message : "login sucessfully"} ) : res.status(400).json({ message : "login failed"})
})





userrouter.post("/assign",async (req,res)=>{
    const data = req.body 
    const newdata = await assignroles(data)
    newdata ? res.status(200).json({newdata ,status : 1,message : "assign roles to users sucessfully"} ) : res.status(400).json({ message : "assign failed"})
})





module.exports = {
    userrouter
}

