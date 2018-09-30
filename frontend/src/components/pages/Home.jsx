import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Card from '../Card'
import Grid from '@material-ui/core/Grid';
import HeroUnit from '../HeroUnit';

import pic1 from '../../../../Pictures/icelolly.jpg'
import pic2 from '../../../../Pictures/icelolly1.jpg'
import pic3 from '../../../../Pictures/icelolly2.jpg'






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

  gridContainer: {
    display: 'flex',
    justifyContent: 'center',
  },

  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },

  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },

  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },

  cardMedia: {
    paddingTop: '56.25%', // 16:9
    border: '1px solid black',
  },

  cardContent: {
    flexGrow: 1,
  },
})

const cardData = [
  {
    id: Math.random(),
    title: "Lolly Pop 1",
    content: "Picture of Lolly Pop 1",
    picture: pic1,
    view: "/project1"
  },
  {
    id: Math.random(),
    title: "Lolly Pop 2",
    content: "Picture of Lolly Pop 2",
    picture: pic2,
    view: "/project2"
  },
  {
    id: Math.random(),
    title: "Lolly Pop 3",
    content: "Picture of Lolly Pop 3",
    picture: pic3,
    view: "/project3"
  },
  {
    id: Math.random(),
    title: "Lolly Pop 4",
    content: "Picture of Lolly Pop 4",
    picture: pic1,
    view: "/project4"
  },
  {
    id: Math.random(),
    title: "Lolly Pop 5",
    content: "Picture of Lolly Pop 5",
    picture: pic2,
    view: "/project5"
  },
  {
    id: Math.random(),
    title: "Lolly Pop 6",
    content: "Picture of Lolly Pop 6",
    picture: pic3,
    view: "/project6"
  },
]

const unit = {
  title: "Home",
  content: "Projects are based in here"
}

function GridView(props) {
  const { classes } = props;
  return (
    <div>
      <HeroUnit title={unit.title} content={unit.content}/>

         <div className={classNames(classes.layout, classes.cardGrid)}>
          <Grid container spacing={40} className={classes.gridContainer}>
            {cardData.map(card => (
              <Grid item key={card} sm={2} md={2} lg={4}>
                   <Card title={card.title}
                    content={card.content} picture={card.picture} view={card.view} className={classes.card} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
  )
}

GridView.propTypes = {
  classes: PropTypes.object.isRequired,
  appBarToggle: PropTypes.func,
};


export default withStyles(styles)(GridView)