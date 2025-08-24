
const roleauthorization = (requiredroles)=>{            //requiredroles wale function ko async nhi bnana h nhi to error dega
    return async (req,res,next)=>{
        const role =  req.user.roles
        const check = await role.find((ele)=>requiredroles.includes(ele))
        if(!check){
             res.status(400).json({message : "forbidden resource"})
        }else {
             next()
        }
       
    }
}


// requiredroles.some((ele)=>role.includes(ele)





module.exports = {
    roleauthorization
}