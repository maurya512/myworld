// import dependencies
import express from 'express';

// import the functions and handlers 
import { getPosts, createPosts } from '../controllers/posts.js';

// setup the router
const router = express.Router();

// routes
router.get('/', getPosts)

router.post('/', createPosts)

export default router;

