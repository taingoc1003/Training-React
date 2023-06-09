import { ADD_TODO, DELETE_TODO, EDIT_TODO } from '../actions/todoAction';

const INITIAL_STATE = {
  todoList: [],
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: action.payload,
      };

    case DELETE_TODO:
      return {
        ...state,
        count: state.count - 1,
      };

    case EDIT_TODO:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};

export default todoReducer;
