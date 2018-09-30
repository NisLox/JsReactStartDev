import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom';
import HoverButton from './HoverButton';

const styles = ({
    heroButtons: {
        display: "inline-block",
        textAlign: "center"
    },

    link1: {
        'textDecoration':'none'
    }
});

function About(props) {
  const { classes } = props;

  return (
    <div className={classes.heroButtons}>
    <Grid container spacing={16} justify="center">
        <Grid item>
            <Link to='/' className={classes.link1}>
                <HoverButton />           
            </Link>
        </Grid>

        <Grid item>
            <Link to='/about' className={classes.link1}>
                <Button variant="contained" color="default">
                    about
                 </Button>
            </Link>
        </Grid>

        <Grid item>
            <Link to='/contact' className={classes.link1}>
                <Button variant="contained" color="default">
                    contact
                </Button>
            </Link>
        </Grid>
    </Grid>
</div>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);