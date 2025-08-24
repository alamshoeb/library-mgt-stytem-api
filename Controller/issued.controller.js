const { Books } = require("../Models/bookmodels")
const { Issuedbook } = require("../Models/issuedmodel")

const createissue = async (data)=>{
    const x = await Issuedbook.create(data)
    return x
}


const dellissued = async(userid)=>{
    const x = await Issuedbook.destroy({where : { id : userid}})
    return x
}



const updateissued = async (userid,data)=>{
    const x = await Issuedbook.findOne({where : { id : userid}})
    if(!x){return null}
    else {const z = await Issuedbook.update(data,{where : { id : userid}})
return z}
}



const getissued = async(userid)=>{
    const x = await Issuedbook.findOne({where : { id : userid}})
    return x
}


const issuedassignbook = async (data)=>{
    const x = await Issuedbook.findOne({where : { id : data.isid}})
    const y = await Books.findOne({where : { id : data.bookid}})
    if(!x || !y){return null}
    else {
        const z = x.addBooks(y)
        return z
    }
}







module.exports = {
    createissue,dellissued,updateissued,getissued,issuedassignbook
}