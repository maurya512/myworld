// all handlers for our routes
// the logic for each routes can be addressed here and later used in routes as needed

// import dependencies
import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
    try {
        // retrieve all posts from the database
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPosts = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (erorr) {
        res.status(409).json({ message: error.message })
    }
}