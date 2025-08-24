const { DataTypes } = require("sequelize");
const { sequelize } = require("../config");
const { Users } = require("./user.model");


const Students = sequelize.define("Students",{
    id : { type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    studentName : {
        type : DataTypes.STRING,
        allowNull : false
    },
    cource : { type : DataTypes.STRING,
        allowNull : false
    }
},{tableName : "Students",timestamps : true})



Users.hasMany(Students)
Students.belongsTo(Users)




module.exports = {
    Students
}