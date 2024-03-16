const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    _id: {
        type: String,
        default: () => Math.random().toString(36).substr(2,9)
    },
    fullName: String,
    username: String,
    email: String,
    password: String
});

module.exports = mongoose.model("User", userSchema);