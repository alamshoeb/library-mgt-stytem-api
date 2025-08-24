const express = require("express")
const { createsubmit, delsubmit, updatesubmit, getsubmit, submitassignbook } = require("../Controller/submit.controller")
const { authentication } = require("../passport/passport middleware,js")



const submitrouter = express.Router()


submitrouter.post("/",authentication,async(req,res)=>{
    const data =  await req.body
    const newdata = await createsubmit(data)
    newdata ? res.status(200).json({newdata, status : 1,message : "book submitted sucessfully"}) : res.status(400).json({message : " submition failed"})
})


submitrouter.post("/withpenalty",authentication,async(req,res)=>{
    const data =  await req.body
    const newdata = await createsubmit(data)
    newdata ? res.status(200).json({newdata, status : 1,message : "book submitted with penalty"}) : res.status(400).json({message : " submition failed"})
})


submitrouter.delete("/:userid",authentication,async (req,res)=>{
    const result = await delsubmit(Number(req.params.userid))
    result ? res.status(200).json({data : result, status : 1 , message : "submision record deleted sucessfully"}) : res.status(400).json({message : "deleted failed"})
})


submitrouter.put("/putt/:userid",authentication,async(req,res)=>{
    const data = await updatesubmit(Number(req.params.userid),req.body)
    data ? res.status(200).json({data ,message : "submition record update sucessfully"} ) : res.status(400).json({ message : "updation failed"})
})



submitrouter.get("/:userid",authentication,async (req,res)=>{
    const data = await getsubmit(Number(req.params.userid))
       data ? res.status(200).json({data , status : 1} ) : res.status(400).json({ message : "No submision record found"})

})


submitrouter.post("/submitassign",async(req,res)=>{
    const data =  await req.body
    const newdata = await submitassignbook(data)
    newdata ? res.status(200).json({newdata, status : 1,message : "book submitted with penalty"}) : res.status(400).json({message : " submition failed"})
})


module.exports = {
    submitrouter
}