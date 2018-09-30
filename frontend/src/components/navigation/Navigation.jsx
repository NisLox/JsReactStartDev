import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Buttons from '../navigation/Buttons'
// import Test from './Test'

const styles = theme => ({

    root: {
        flexGrow: 1,
    },

    grow: {
        flexGrow: 1,
    },

    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    
    link1: {
        'textDecoration':'none',
    },

    button: {
        margin: theme.spacing.unit,
    },

    toolbar: {
        flexGrow: 1,
    },

});

function Navigation(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.Toolbar}>
                <Typography variant="title" color="inherit" className={classes.grow}>
                        Will Burgess
                 </Typography>

                <Buttons />
                {/* <Test /> */}
                
                </Toolbar>
            </AppBar>
        </div>
    )
}

Navigation.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Navigation);