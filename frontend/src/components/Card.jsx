import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';

const styles = {
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      },

      cardMedia: {
        paddingTop: '100%',
      },

      cardContent: {
        flexGrow: 1,
      },
}

function CustomCard(props) {
    //eslint-disable-next-line
    const {classes} = props;
    return (
        <Card className={classes.card}>
            <CardMedia
            className={classes.cardMedia}
            image={props.picture}
            title="Image title"
            />
            <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="headline" component="h2">
                {props.title}
            </Typography>
            <Typography>
                {props.content}
            </Typography>
            </CardContent>
            <CardActions>
                <Link to={props.view} className={classes.link1}>
                    <Button size="small" color="primary">
                        View
                    </Button>
                </Link>
            </CardActions>
         </Card>
    )
}

CustomCard.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string,
    content: PropTypes.string,
    picture: PropTypes.string,
    view: PropTypes.string,
    appBarToggle: PropTypes.func,
  };

export default withStyles(styles)(CustomCard)