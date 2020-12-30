// import dependencies

import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

// import logo from the folder 
import myworld from './images/myworld.png'

// import components 
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';

// import files
import useStyles from './styles';
const App = () => {
    const classes = useStyles();

    return (
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading}variant='h2' align='center'></Typography>
                <img className = {classes.myworld} src={myworld} alt='my world' height='150' />
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