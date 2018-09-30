import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import HeroUnit from '../../HeroUnit';

const styles = ({
});

const unit = {
  title: "Project4",
  content: "Project4 stuff goes in here"
}

function Project4() {
  // const { classes } = props;

  return (
    <div>
      <HeroUnit title={unit.title} content={unit.content}/>
  </div>
  );
}

Project4.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Project4);