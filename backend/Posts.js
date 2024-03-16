
const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    _id: {
        type: String,
        default: () => Math.random().toString(36).substr(2,9)
    },
    topic: String,
    Imgurl: String ,
    videoUrl: String,
});

module.exports = mongoose.model("Posts", postSchema);