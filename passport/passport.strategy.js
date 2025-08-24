const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");
const { Users } = require("../Models/user.model");

passport.use(new Strategy({jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(), secretOrKey : process.env.JWT_SECRET},
async(jwtpayload,done)=>{
const x = await Users.findOne({where : { id : jwtpayload.id }})
if(!x){return done(null,false)}
else {
    return done(null,jwtpayload)
}
}))








module.exports={
passport
}