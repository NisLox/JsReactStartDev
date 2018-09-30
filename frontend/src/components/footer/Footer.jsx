import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles, Divider } from '@material-ui/core';
import PropTypes from 'prop-types';
import Icon from './Icon'

const styles = theme => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing.unit * 6,
      },
})

function Footer(props) {
    const {classes} = props;
    return (
        <div>
            <footer className={classes.footer}>
               <Divider />
                <Typography variant="subheading" align="center" color="textSecondary" component="p">
                    <Icon />
                </Typography>
            </footer>
        </div>
    )
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
  };


export default withStyles(styles)(Footer)

