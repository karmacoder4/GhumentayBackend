const User = require('../models/User');

const register = async(req,res) => {
    const user = await User.create(req.body);
    res.status(200).json({user})
}

const login = async(req,res) => {
    res.send('Login User');
}

const hello = async(req,res) => {
    res.send('Hello Page');
}


module.exports = {
    register,
    login,
    hello
}