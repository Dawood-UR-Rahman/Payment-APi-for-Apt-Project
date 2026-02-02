const User = require('../models/User');
const jwt  = require ('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.login = async (req, res)=>{
    const user= await User.findOne({email:req.body.email});
    if(!user){
        return res.status(404).json({message: "Use Not Founnd"});
    }
    const token = jwt.sign({
        id:user._id,
        role:user.role
    },process.env.JWT_SECRET)

    res.json({token});
}