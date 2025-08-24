const express = require("express")
require("dotenv").config()
const { sequelize } = require("./config");
const { Users } = require("./Models/user.model");
const { userrouter } = require("./Routes/userroutes");
const { bookrouter } = require("./Routes/book.router");
const { Books } = require("./Models/bookmodels");
const { Librarian } = require("./Models/librarianmodel");
const { librarianrouter } = require("./Routes/librarian.router");
const { Students } = require("./Models/student.models");
const { studentrouter } = require("./Routes/student.router");
const { Issuedbook } = require("./Models/issuedmodel");
const { issuerouter } = require("./Routes/issued,router");
const { Submitbook } = require("./Models/submitmodel");
const { submitrouter } = require("./Routes/submit.router");
const { rolerouter } = require("./Routes/roles.router");
const { Roles } = require("./Models/rolesmodels");



const app = express();
app.use(express.json())
app.use("/Users",userrouter)
app.use("/Books",bookrouter)
app.use("/Librarian",librarianrouter)
app.use("/Students",studentrouter)
app.use("/Issued",issuerouter)
app.use("/Submit",submitrouter)
app.use("/Roles",rolerouter)







app.get("/",(req,res)=>{
res.end("wellcome to new projects")
})



app.listen(3020,()=>{
    sequelize.authenticate()
    sequelize.sync()
    Users.sync({alter : true})
    Books.sync({alter : true})
    Librarian.sync({alter : true})
    Students.sync({alter : true})
    Issuedbook.sync({alter : true})
    Submitbook.sync({alter : true})
    Roles.sync({alter : true})
    console.log("application running on port :",3020);
    
})