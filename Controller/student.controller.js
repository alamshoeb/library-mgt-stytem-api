const jwt = require("jsonwebtoken")
const { Books } = require("../Models/bookmodels")
const { Students } = require("../Models/student.models")

const createstudent = async (data)=>{
    const x = await Students.create(data)
    return x.dataValues
}



    
const delstudent = async(userid)=>{
    const x = await Students.destroy({where : { id : userid}})
    return x
}



const updatestudent = async (userid,data)=>{
    const x = await Students.findOne({where : { id : userid}})
    if(!x){return null}
    else {const z = await Students.update(data,{where : { id : userid}})
return z}
}



const getstudent = async (userid)=>{
    const x = await Students.findOne({where : { id : userid}, include : { model : Books}})
    return x
}












module.exports = {
    createstudent,delstudent,updatestudent,getstudent
}