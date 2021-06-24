const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    avatar: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: false,
    },
    liked: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    }
});

const Post = new mongoose.model("Post", PostSchema);

module.exports = Post;