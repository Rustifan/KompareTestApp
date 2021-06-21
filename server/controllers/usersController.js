const ExpressError = require("../errors/ExpressError");
const User = require("../models/userModel");


module.exports.getUsers = async (req, res)=>
{
    const users = await User.find();
    res.json(users);
};

module.exports.addUser = async (req, res)=>
{
    const user = new User(req.body);
    await user.save();
    res.sendStatus(200);
};

module.exports.deleteUser = async (req, res)=>
{
    const {id} = req.params;
    await User.findOneAndDelete({_id: id});
    res.sendStatus(200);
}


