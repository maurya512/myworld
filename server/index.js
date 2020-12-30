import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

// import files
import postRoutes from './routes/posts.js';

// initialize the app
const app = express();

// setup the starting path for all routes
// every route within postRoutes will start with 'posts
app.use('/posts', postRoutes);
// set a limit to upload a jpeg to 30 mb
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// connection url to the database
const CONNECTION_URL = 'mongodb+srv://maurya512:Mprjug512@cluster0.pc8lw.mongodb.net/<dbname>?retryWrites=true&w=majority'

// port to deploy the app
const PORT = process.env.PORT || 5000;

// database connection using mongoose
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false);