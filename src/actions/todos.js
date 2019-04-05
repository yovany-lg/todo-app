export const ADD_TODO = 'todo/add';
export const TOGGLE_TODO = 'todo/toggle';
export const DELETE_TODO = 'todo/delete';

let todoCount = 3;

export const addTodo = text => ({
  type: ADD_TODO,
  id: todoCount++,
  text,
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id,
})