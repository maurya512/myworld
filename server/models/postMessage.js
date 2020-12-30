// import dependencies
import mongoose from 'mongoose';

// mongoose Schema
const postSchema = mongoose.Schema({
    // each post must consist of the following items
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createaAt: {
        type: Date,
        default: new Date()
    },
});

// turn the schema into a model
const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage;
