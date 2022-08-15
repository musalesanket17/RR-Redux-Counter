import { DECREMENT, INCREMENT } from "./actiontype";

export const Reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.payload
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - action.payload
      };
    default:
      return state;
  }
};
