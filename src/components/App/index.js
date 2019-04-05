import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import Icon from '@material-ui/core/Icon';
import Link from '@material-ui/core/Link';

import TodoList from '../../containers/TodoListContainer'; 

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const MainContent = ({ children }) => (
  <Grid container justify="center">
    <Grid item md={6} xs={12}>
      {children}
    </Grid>
  </Grid>
)

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Grid container className={classes.root} justify="center">
          <Grid item md={8} xs={12} >
            <Toolbar>
              <Typography variant="h6" color="inherit" className={classes.grow}>
                Todo App
              </Typography>
              <Link
                color="inherit"
                component="a"
                target="_blank"
                underline="none"
                href="https://github.com/yovany-lg/todo-app"
              >
                <IconButton color="inherit" aria-label="Delete" className={classes.margin}>
                  <Icon className={classNames(classes.icon, 'fab fa-github')} />
                </IconButton>
              </Link>
              <Link
                color="inherit"
                component="a"
                target="_blank"
                underline="none"
                href="https://www.youtube.com/channel/UC1oxnJjmWlaYR3meTzeaW4A/"
              >
                <IconButton color="inherit" aria-label="Delete" className={classes.margin}>
                  <Icon className={classNames(classes.icon, 'fab fa-youtube-square')} />
                </IconButton>
              </Link>
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>
      <MainContent>
        <TodoList />
      </MainContent>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);