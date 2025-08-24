const { Librarian } = require("../Models/librarianmodel")
const bcrypt = require("bcrypt")
const { Users } = require("../Models/user.model")
const { Roles } = require("../Models/rolesmodels")

const createlibr = async (data)=>{
   
    const x = await Librarian.create(data)
    return x }


    
const dellibrarian = async(userid)=>{
    const x = await Librarian.destroy({where : { id : userid}})
    return x
}



const updatelibrarian = async (userid,data)=>{
    const x = await Librarian.findOne({where : { id : userid}})
    if(!x){return null}
    else {const z = await Librarian.update(data,{where : { id : userid}})
return z}
}



const getlibrarian = async(userid)=>{
    const x = await Librarian.findOne({where : { id : userid},include : { model : Users , include : { model : Roles}}})
    return x
}







    module.exports = {
        createlibr,dellibrarian,updatelibrarian,getlibrarian
    }