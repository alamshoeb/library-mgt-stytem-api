const { DataTypes } = require("sequelize");
const { sequelize } = require("../config");
const { Users } = require("./user.model");

const Librarian = sequelize.define("Librarian",{
    id : { type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    librarianName : { type : DataTypes.STRING,
        allowNull : false
    },
   

},{tableName : "Librarian", timestamps : true})



 Users.hasOne(Librarian)
 Librarian.belongsTo(Users)


module.exports = {
    Librarian
}