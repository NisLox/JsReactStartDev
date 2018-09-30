import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    heroUnit: {
        backgroundColor: theme.palette.background.paper,
      },
      heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
      },
      heroButtons: {
        marginTop: theme.spacing.unit * 4,
      },
    
  });

function HeroUnit (props) {
    const { classes } = props;
    return (
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography variant="display3" align="center" color="textPrimary" gutterBottom>
              {props.title}
            </Typography>
            <Typography variant="title" align="center" color="textSecondary" paragraph>
              {props.content}
            </Typography>
          </div>
          {props.children}
        </div>
    )
}

HeroUnit.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
    content: PropTypes.string,
  };


  export default withStyles (styles)(HeroUnit);