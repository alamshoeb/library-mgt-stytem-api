const { Roles } = require("../Models/rolesmodels")

const creatroles = async (data)=>{
    const x = await Roles.create(data)
    return x
}







module.exports = {
    creatroles
}
