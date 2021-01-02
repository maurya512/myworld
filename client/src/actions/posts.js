import * as api from '../api';

// Action creators
// function that return an action
export const getPosts = () => async (dispatch) => {
    try {
        // fetch all the data from the api
        const { data } = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}
