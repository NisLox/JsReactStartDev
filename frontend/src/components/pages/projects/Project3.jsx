import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import HeroUnit from '../../HeroUnit';

const styles = ({
});

const unit = {
  title: "Project3",
  content: "Project3 stuff goes in here"
}

function Project3() {
  // const { classes } = props;

  return (
    <div>
      <HeroUnit title={unit.title} content={unit.content}/>
  </div>
  );
}

Project3.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Project3);