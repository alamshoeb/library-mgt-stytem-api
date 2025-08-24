const { DataTypes } = require("sequelize");
const { sequelize } = require("../config");
const { Users } = require("./user.model");

const Roles = sequelize.define("Roles",{
    id : { type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    rolesName : {
        type : DataTypes.STRING,
        allowNull : false
    }
},{tableName : "Roles", timestamps : true})


Users.belongsToMany(Roles,{ through : "userhasmanyroles"})
Roles.belongsToMany(Users,{through : "userhasmanyroles"})



module.exports = {
    Roles
}