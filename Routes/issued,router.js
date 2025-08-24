
const express = require("express")
const { createissue, dellissued, updateissued, getissued, issuedassignbook } = require("../Controller/issued.controller")
const { authentication } = require("../passport/passport middleware,js")
const { roleauthorization } = require("../Controller/role.authorization")



const issuerouter = express.Router()


issuerouter.post("/",authentication,roleauthorization(["Admin"]),async (req,res)=>{
    const data =  await req.body 
    const newdata = await createissue(data)
    newdata ? res.status(200).json({newdata ,status : 1,message : "issued book sucessfully"} ) : res.status(400).json({ message : "book not issued"})
})

issuerouter.delete("/:userid",authentication,roleauthorization(["Admin"]),async (req,res)=>{
    const result = await dellissued(Number(req.params.userid))
    result ? res.status(200).json({data : result, status : 1 , message : "issued record deleted sucessfully"}) : res.status(400).json({message : "deleted failed"})
})

issuerouter.put("/putt/:userid",authentication,roleauthorization(["Admin"]),async(req,res)=>{
    const data = await updateissued(Number(req.params.userid),req.body)
    data ? res.status(200).json({data ,message : "issued record update sucessfully"} ) : res.status(400).json({ message : "updation failed"})
})


issuerouter.get("/:userid",authentication,roleauthorization(["Admin"]),async (req,res)=>{
    const data = await getissued(Number(req.params.userid))
       data ? res.status(200).json({data , status : 1} ) : res.status(400).json({ message : "No record found"})

})




issuerouter.post("/assign",async (req,res)=>{
    const data =  await req.body 
    const newdata = await issuedassignbook(data)
    newdata ? res.status(200).json({newdata ,status : 1,message : "assign sucessfull"} ) : res.status(400).json({ message : "assign failed"})
})


module.exports = {
    issuerouter
}