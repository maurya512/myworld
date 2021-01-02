// reducer is a function that takes in a state and an action type as a parameter
// state always has to equal something, it cannot equal to nothing or udefined
// initial state is always going to be posts.
export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            // action.payload are the actual posts
            return action.payload;
        case 'CREATE':
            return posts;
        default:
            return posts;
    }
}