import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  icon: {
    margin: theme.spacing.unit,
    fontSize: 25,
  },
});

const TodoItem = ({ id, completed, text, deleteTodo, toggleTodo, classes }) => (
  <ListItem key={id} role={undefined} dense button onClick={() => toggleTodo(id)}>
    <Checkbox
      checked={completed}
      tabIndex={-1}
      disableRipple
    />
    <ListItemText
      primary={(
        <Typography component={!completed ? 'title' : 'del'} variant="subtitle1" gutterBottom inline>
          {text}
        </Typography>
      )}  
    />
    <ListItemSecondaryAction>
      <IconButton aria-label="Comments" onClick={() => deleteTodo(id)}>
        <DeleteRoundedIcon className={classes.icon} />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

export default withStyles(styles)(TodoItem);