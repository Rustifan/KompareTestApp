const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userScheema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

const User = mongoose.model("User", userScheema);

module.exports = User;