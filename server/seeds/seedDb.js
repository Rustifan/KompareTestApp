const User = require("../models/userModel");
const mongoInit = require("../Mongo/mongoInit");

mongoInit();

const users = [
    {name: "Mate", surname: "Matić", email: "mate@test.com"}, 
    {name: "Jure", surname: "Jurić", email: "jure@test.com"}];


const reseed = async ()=>
{
    await User.deleteMany();    
    await User.insertMany(users);

}

reseed();



