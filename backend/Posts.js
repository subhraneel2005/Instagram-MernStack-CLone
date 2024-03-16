const { default: mongoose } = require("mongoose");
const mongoosev = require("mongoose");

const postSchema = mongoose.Schema({
    topic: String,
    Imgurl: String,
    videoUrl: String,
});

module.exports = mongoose.model("Posts", postSchema);