// This file is shared across the demos.

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import { Link } from 'react-router-dom';

export const mailFolderListItems = (
  <div>
    <Link to='/project1' style={{'textDecoration':'none'}}>
      <ListItem button>
        <ListItemIcon>
        <StarIcon />
        </ListItemIcon>
        <ListItemText primary="Project1"  />
      </ListItem>
    </Link>

    <Link to='/project2' style={{'textDecoration':'none'}}>
      <ListItem button>
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary="Project2" />
      </ListItem>
    </Link>
    
    <Link to='/project3' style={{'textDecoration':'none'}}>
      <ListItem button>
        <ListItemIcon>
        <StarIcon />
        </ListItemIcon>
        <ListItemText primary="Project3" />
      </ListItem>
    </Link>

    <Link to='/project4' style={{'textDecoration':'none'}}>
      <ListItem button>
        <ListItemIcon>
        <StarIcon />
        </ListItemIcon>
        <ListItemText primary="Project4" />
      </ListItem>
    </Link>

    <Link to='/project5' style={{'textDecoration':'none'}}>
      <ListItem button>
        <ListItemIcon>
        <StarIcon />
        </ListItemIcon>
        <ListItemText primary="Project5" />
      </ListItem>
    </Link>

    <Link to='/project6' style={{'textDecoration':'none'}}>
      <ListItem button>
        <ListItemIcon>
        <StarIcon />
        </ListItemIcon>
        <ListItemText primary="Project6" />
      </ListItem>
    </Link>
  </div>
);