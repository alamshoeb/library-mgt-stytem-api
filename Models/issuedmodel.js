const { DataTypes } = require("sequelize")
const { sequelize } = require("../config")
const { Books } = require("./bookmodels")


const Issuedbook = sequelize.define("Issuedbook",{
    id : { type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    bookid : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    studentid : { type : DataTypes.INTEGER,
        allowNull : false
    },
    issuedate : {
        type : DataTypes.STRING

    }
},{tableName : "Issuedbook",timestamps : true})




Books.belongsToMany(Issuedbook,{through : "issuedbookwithuser"})
Issuedbook.belongsToMany(Books,{through : "issuedbookwithuser"})


module.exports = {
   Issuedbook
}