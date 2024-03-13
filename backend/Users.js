const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/instagramUsersDB");

const userSchema = mongoose.Schema({
    fullName: String,
    username: String,
    email: String,
    password: String
});

module.exports = mongoose.model("User", userSchema);