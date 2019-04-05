import { connect } from 'react-redux';
import {
  addTodo as addTodoAction,
  toggleTodo as toggleTodoAction,
  deleteTodo as deleteTodoAction,
} from '../actions/todos';
import TodoList from '../components/TodoList';

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  addTodo: (text) => dispatch(addTodoAction(text)),
  toggleTodo: (id) => dispatch(toggleTodoAction(id)),
  deleteTodo: (id) => dispatch(deleteTodoAction(id)),
});

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;