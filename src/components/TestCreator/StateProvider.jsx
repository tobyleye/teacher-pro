import * as React from "react";
import { useContext } from "react";

const StateContext = React.createContext(null);

const initialState = {
  testInfo: {
    name: "",
    pointsForNoAnswer: 0,
    pointsForWrongAnswer: 0,
    duration: "",
  },
  questions: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "updateTestInfo":
      let changes = action.payload;
      let testInfo = { ...state.testInfo, ...changes };
      return {
        ...state,
        testInfo,
      };

    case "addNewQuestion":
      let newQuestion = action.payload;
      return {
        ...state,
        questions: state.questions.concat(newQuestion),
      };

    case "deleteQuestion":
      return {
        ...state,
        questions: state.questions.filter((_, qIndex) => qIndex !== action.payload),
      };
    case "updateQuestion":
      return {
        ...state,
        questions: state.questions.map((question, qIndex) => {
          if (qIndex === action.payload.qIndex) {
            return {
              ...question,
              ...action.payload.changes,
            };
          }
          return question;
        }),
      };
    default:
      return state;
  }
}

export function StateProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  let value = React.useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
}

export function useStateProvider() {
  const value = useContext(StateContext);
  return value;
}
