const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    fullName: String,
    username: String,
    email: String,
    password: String
});

module.exports = mongoose.model("User", userSchema);