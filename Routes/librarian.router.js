
const express = require("express")
const { createlibr, dellibrarian, updatelibrarian, getlibrarian } = require("../Controller/librarian.controller")
const { authentication } = require("../passport/passport middleware,js")
const { roleauthorization } = require("../Controller/role.authorization")

const librarianrouter = express.Router()

librarianrouter.post("/",authentication,roleauthorization(["Superadmin"]),async (req,res)=>{
    const data =  await req.body 
    const newdata = await createlibr(data)
    newdata ? res.status(200).json({newdata } ) : res.status(400).json({ message : "failed"})
})


librarianrouter.delete("/:userid",authentication,roleauthorization(["Superadmin"]),async (req,res)=>{
    const result = await dellibrarian(Number(req.params.userid))
    result ? res.status(200).json({data : result, status : 1 , message : "librarian deleted sucessfully"}) : res.status(400).json({message : "deleted failed"})
})

librarianrouter.put("/:userid",authentication,roleauthorization(["Superadmin"]),async(req,res)=>{
    const data = await updatelibrarian(Number(req.params.userid),req.body)
    data ? res.status(200).json({data ,message : "librarian update sucessfully"} ) : res.status(400).json({ message : "updation failed"})
})


librarianrouter.get("/:userid",authentication,async (req,res)=>{
    const data = await getlibrarian(Number(req.params.userid))
       data ? res.status(200).json({data , status : 1} ) : res.status(400).json({ message : "NO record found"})

})



module.exports = {
    librarianrouter
}
