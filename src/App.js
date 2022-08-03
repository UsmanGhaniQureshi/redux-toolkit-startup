import { useDispatch, useSelector } from "react-redux";
import Posts from "./posts";
import {
  increment,
  decrement,
  reset,
  incrementBy5,
} from "./store/counter/counterSlice";
function App() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();


  return (
    <div>
      {/* <h1>Practice redux kit</h1>
      <p>{value}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(incrementBy5())}>Increment 5</button> */}

      {/* Posts */}
      <Posts />
    </div>
  );
}

export default App;
