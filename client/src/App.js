// import dependencies

import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

// import hooks from react-redux
import { useDispatch } from 'react-redux';

// import logo from the folder 
import myworld from './images/myworld.png'

// import components 
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';

// import files
import useStyles from './styles';
import { getPosts } from './actions/posts';
const App = () => {
    const classes = useStyles();
    // define a dispatch
    const dispatch = useDispatch();

    // specify the use effect
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    return (
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h2' align='center'></Typography>
                <img className={classes.myworld} src={myworld} alt='my world' height='150' />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;