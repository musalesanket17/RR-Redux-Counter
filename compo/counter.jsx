import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter } from "../action";

export default function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(incrementCounter(2))}>INCREMENT</button>
      <button
        disabled={count === 0}
        onClick={() => dispatch(decrementCounter(2))}
      >
        DECREMENT
      </button>
    </>
  );
}
