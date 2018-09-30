import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing.unit * 2,
  },

  link1: {
    'textDecoration':'none'
  }
});

class MenuListComposition extends React.Component {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <div>
          <Button variant="contained" color="default"
            buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-owns={open ? 'menu-list-grow' : null}
            aria-haspopup="true"
            onMouseEnter={this.handleToggle}
          >
            Projects
          </Button>
          <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList>
                      <Link to='/' className={classes.link1}>
                        <MenuItem onClick={this.handleClose}>Home</MenuItem>
                      </Link>

                      <Link to='/project1' className={classes.link1}>
                        <MenuItem onClick={this.handleClose}>Project1</MenuItem>
                      </Link>

                      <Link to='/Project2' className={classes.link1}>
                        <MenuItem onClick={this.handleClose}>Project2</MenuItem>
                      </Link>
                      
                      <Link to='/Project3' className={classes.link1}>
                        <MenuItem onClick={this.handleClose}>Project3</MenuItem>
                      </Link>

                      <Link to='/Project4' className={classes.link1}>
                        <MenuItem onClick={this.handleClose}>Project4</MenuItem>
                      </Link>

                      <Link to='/Project5' className={classes.link1}>
                        <MenuItem onClick={this.handleClose}>Project5</MenuItem>
                      </Link>

                      <Link to='/Project6' className={classes.link1}>
                        <MenuItem onClick={this.handleClose}>Project6</MenuItem>
                      </Link>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    );
  }
}

MenuListComposition.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuListComposition);