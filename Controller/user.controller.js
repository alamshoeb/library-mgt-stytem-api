const { Users } = require("../Models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { Librarian } = require("../Models/librarianmodel")
const { Students } = require("../Models/student.models")
const { Roles } = require("../Models/rolesmodels")
const { Books } = require("../Models/bookmodels")
const { submitassignbook } = require("./submit.controller")
const { Submitbook } = require("../Models/submitmodel")
const { Issuedbook } = require("../Models/issuedmodel")


const signupuser = async (data)=>{
    const encpt = await bcrypt.hash(data.password,10)
    data.password = encpt
    const x = await Users.create(data,{include : { model : Students}})
    return x }



    


const deluser = async(userid)=>{
    const x = await Users.destroy({where : { id : userid}})
    return x
}


const updateuser = async (userid,data)=>{
    const x = await Users.findOne({where : { id : userid}})
    if(!x){return null}
    else {const z = await Users.update(data,{where : { id : userid}})
return z}
}



const getuser = async(userid)=>{
    const x = await Users.findOne({where : { id : userid, active : true },include : { model : Students , include : { model : Books,include : [{model : Issuedbook},{ model : Submitbook}]}}})
    return x
}



    const login = async (data)=>{
    const x = await Users.findOne({where : { email : data.email ,active : true},include : { model : Roles}})
    const y = await  bcrypt.compare(data.password,x.password)

    const findrole = await  x.Roles.map((ele)=>ele.rolesName)  //agr arrow function me paranthesis lga kr likha to roll ayenge nhi

    if(!x || !y){return null}
    else {
        var token = jwt.sign({
            id : x.id,
            name : x.userName,
            email : x.email,
            active : x.active,
            password : x.password,
            roles : findrole

        },process.env.JWT_SECRET,{expiresIn : "2h"})
    }
    return {

        excesstoken : token
    }
}



    const assignroles = async (data)=>{
    const x = await Users.findOne({where : { id : data.userid}})
    const y =  await Roles.findOne({where : { id : data.roleid}})
    if(!x || !y) { return null}
    else {
        const z = await x.addRoles(y)
        return z
}}



const middle = async (req,res,next)=>{
    if(typeof(req.params.userid==="string")){
        req.params.userid = Number(req.params.userid)
         next()
    }else{
        res.status(400).json({message : "error in conveersion"})
    }
   
}






module.exports = {
    signupuser,deluser,updateuser,getuser,login,assignroles,middle
}

















