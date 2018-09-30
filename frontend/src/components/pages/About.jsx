import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import HeroUnit from '../HeroUnit';

const styles = ({
});

const unit = {
  title: "About",
  content: "About stuff goes in here"
}

function About() {
  // const { classes } = props;

  return (
      <HeroUnit title={unit.title} content={unit.content}/>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);