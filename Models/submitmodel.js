const { DataTypes } = require("sequelize");
const { sequelize } = require("../config");
const { Students } = require("./student.models");
const { Books } = require("./bookmodels");


const Submitbook = sequelize.define("Submitbook",{
    id :
     { type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true},
    bookid : 
        { type : DataTypes.INTEGER,
            allowNull : false
        },
    studentid : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    beforetime  : {
        type : DataTypes.STRING
    },
    aftertime : {
        type : DataTypes.STRING,
   
        
    },penalty : {
        type : DataTypes.INTEGER,
        
    },lostbook : {
        type : DataTypes.STRING
    }





   
},{tableName : "Submitbook",timestamps : true})





Submitbook.belongsToMany(Books,{through : "submitbookswithuser"})
Books.belongsToMany(Submitbook,{through : "submitbookswithuser"})


module.exports = {
    Submitbook
}