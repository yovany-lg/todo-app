import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions/todos';

const initialState = [
  { id: 0, text: 'Dale Like al Video', completed: false },
  { id: 1, text: 'Suscribirse al canal', completed: false },
  { id: 2, text: 'Compartir el video', completed: false },
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        id: action.id,
        completed: false,
        text: action.text,
      });
    case TOGGLE_TODO:
      return state.map(
        todo => (todo.id === action.id) ? { ...todo, completed: !todo.completed } : todo
      );
    case DELETE_TODO:
        return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}

export default todos;