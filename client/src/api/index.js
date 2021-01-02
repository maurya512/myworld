// import dependencies
import axios from 'axios';

// the url pointing to the backend route
const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);