
const express = require("express")
const { createbook, delbook, updatebook, getbook, assignbook } = require("../Controller/book.controller")
const { authentication } = require("../passport/passport middleware,js")
const { roleauthorization } = require("../Controller/role.authorization")


const bookrouter = express.Router()


bookrouter.post("/",authentication,roleauthorization(["Admin"]),async (req,res)=>{
    const data = req.body 
    const newdata = await createbook(data)
    newdata ? res.status(200).json({newdata ,status : 1,message : "book created sucessfully"} ) : res.status(400).json({ message : "failed"})
})


bookrouter.delete("/:bookid",authentication,roleauthorization(["Admin"]),async (req,res)=>{
    const result = await delbook(Number(req.params.bookid))
    result ? res.status(200).json({data : result, status : 1 , message : "book has been deleted sucessfully"}) : res.status(400).json({message : "deleted failed"})
})


bookrouter.put("/:bookid",authentication,roleauthorization(["Admin"]),async(req,res)=>{
    const data = await updatebook(Number(req.params.bookid),req.body)
    data ? res.status(200).json({data ,message : "book update sucessfully"} ) : res.status(400).json({ message : "updation failed"})
})



bookrouter.get("/:bookid",authentication,async (req,res)=>{
    const data = await getbook(Number(req.params.bookid))
       data ? res.status(200).json({data , status : 1} ) : res.status(400).json({ message : " failed"})

})


bookrouter.post("/assignbook",authentication,roleauthorization(["Admin"]),async (req,res)=>{
    const data = await req.body 
    const newdata = await assignbook(data)
    newdata ? res.status(200).json({newdata ,status : 1,message : "book assign to student sucessfully"} ) : res.status(400).json({ message : "failed"})
})




module.exports  = {
    bookrouter
}