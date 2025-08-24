const { Books } = require("../Models/bookmodels")
const { Students } = require("../Models/student.models")



const createbook = async (data)=>{
    const x = await Books.create(data)
    return x }




const delbook = async(bookid)=>{
    const x = await Books.destroy({where : { id : bookid}})
    return x
}


const updatebook = async (bookid,data)=>{
    const x = await Books.findOne({where : { id : bookid}})
    if(!x){return null}
    else {const z = await Books.update(data,{where : { id : bookid}})
return z}
}



const getbook = async(bookid)=>{
    const x = await Books.findOne({where : { id : bookid },include : { model : Students}})
    return x
}




const assignbook = async (data)=>{
    const x = await Books.findOne({where : { id : data.bookid}})
    const y = await Students.findOne({where : { id : data.studentid}})
    if(!x || !y){return null}
    else {
        const asignn = await x.addStudents(y)
        return asignn
    }
}





module.exports={
    createbook,delbook,updatebook,getbook,assignbook
}