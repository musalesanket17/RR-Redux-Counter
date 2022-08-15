import { DECREMENT, INCREMENT } from "./actiontype";

export const incrementCounter = (payload) => ({
  type: INCREMENT,
  payload
});

export const decrementCounter = (payload) => ({
  type: DECREMENT,
  payload
});
