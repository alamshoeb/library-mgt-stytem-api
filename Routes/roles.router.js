
const express = require("express")
const { creatroles } = require("../Controller/roles.controller")

const rolerouter = express.Router()



rolerouter.post("/",async (req,res)=>{
    const data = await req.body
    const newdata = await creatroles(data)
    newdata ? res.status(200).json({newdata , status : 1, message : "roles created sucessfully"}) : res.status(400).json({meaage : "failed"})
})





module.exports = {
    rolerouter
}