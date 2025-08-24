const { DataTypes } = require("sequelize");
const { sequelize } = require("../config");
const { Students } = require("./student.models");

const Books = sequelize.define("Books",{
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    bookName : {
        type : DataTypes.STRING,
        allowNull : false
    }
},{tableName : "Books",timestamps : true})



Books.hasMany(Students)
Students.belongsTo(Books)

module.exports = {
    Books
}