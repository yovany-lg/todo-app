import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';

import TodoItem from './TodoItem'
import NewTodo from './NewTodo';

const styles = {
  card: {
    minWidth: 275,
    marginTop: '30px',
  },
};

const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
  <List>
    {todos.map(todo => (
      <TodoItem
        id={todo.id}
        text={todo.text}
        completed={todo.completed}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    ))}
  </List>
);

function SimpleCard({ classes, todos, addTodo, toggleTodo, deleteTodo }) {
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          My Todo List
        </Typography>
        <NewTodo addTodo={addTodo} />
        <TodoList
          todos={todos}
          addTodo={addTodo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </CardContent>
      <CardActions>
        <Button size="small">Todos</Button>
        <Button size="small">Completados</Button>
      </CardActions>
    </Card>
  );
}

export default withStyles(styles)(SimpleCard);
