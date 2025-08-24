
const express = require("express")
const { createstudent, delstudent, updatestudent, getstudent, loginstudents } = require("../Controller/student.controller")
const { authentication } = require("../passport/passport middleware,js")
const { roleauthorization } = require("../Controller/role.authorization")



const studentrouter = express.Router()


studentrouter.post("/",authentication,roleauthorization(["Admin"]),async(req,res)=>{
    const data =  await req.body
    const newdata = await createstudent(data)
    newdata ? res.status(200).json({newdata, status : 1,message : "students created sucessfully"}) : res.status(400).json({message : "failed"})
})


studentrouter.delete("/:userid",authentication,roleauthorization(["Admin"]),async (req,res)=>{
    const result = await delstudent(Number(req.params.userid))
    result ? res.status(200).json({data : result, status : 1 , message : "student deleted sucessfully"}) : res.status(400).json({message : "deleted failed"})
})

studentrouter.put("/:userid",authentication,roleauthorization(["Admin"]),async(req,res)=>{
    const data = await updatestudent(Number(req.params.userid),req.body)
    data ? res.status(200).json({data ,message : "students update sucessfully"} ) : res.status(400).json({ message : "updation failed"})
})


studentrouter.get("/:userid",authentication,async (req,res)=>{
    const data = await getstudent(Number(req.params.userid))
       data ? res.status(200).json({data , status : 1} ) : res.status(400).json({ message : "No record found"})

})




module.exports = {
    studentrouter
}