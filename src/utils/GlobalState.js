import React, { createContext, useContext, useReducer } from "react";

const TodoContext = createContext();
const { Provider } = TodoContext;

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: state.length * Math.random(),
          name: action.name,
        },
      ];
    case "remove":
      const newSate = state.filter((todo) => todo.id !== action.id);
      return newSate;
    default:
      return new Error(`Invalid action type: ${action.type}`);
  }
};

const TodoProvider = ({ value = 0, ...props }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return <Provider value={[state, dispatch]} {...props} />;
};

const useTodoContext = () => {
  return useContext(TodoContext);
};

export { TodoProvider, useTodoContext };
