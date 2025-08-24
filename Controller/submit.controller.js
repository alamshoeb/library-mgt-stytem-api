const { Books } = require("../Models/bookmodels")
const { Submitbook } = require("../Models/submitmodel")

const createsubmit = async (data)=>{
    const x = await Submitbook.create(data)
    return x.dataValues
}



    
const delsubmit = async(userid)=>{
    const x = await Submitbook.destroy({where : { id : userid}})
    return x
}



const updatesubmit = async (userid,data)=>{
    const x = await Submitbook.findOne({where : { id : userid}})
    if(!x){return null}
    else {const z = await Submitbook.update(data,{where : { id : userid}})
return z}
}



const getsubmit = async (userid)=>{
    const x = await Submitbook.findOne({where : { id : userid}})
    return x
}



const submitassignbook = async (data)=>{
    const x = await Submitbook.findOne({where : { id : data.submitid}})
    const y = await Books.findOne({where : { id : data.bookid}})
    if(!x || !y){return null}
    else {
        const z = x.addBooks(y)
        return z
    }
}






module.exports = {
    createsubmit,delsubmit,updatesubmit,getsubmit,submitassignbook
}