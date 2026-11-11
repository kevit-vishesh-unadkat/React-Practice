import {useState} from "react";
import { useSelector,useDispatch } from "react-redux";

import {
  increment,
  decrement,
  reset,
  incrementByAmount
} from "./features/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  const [amount, setAmount] = useState(5);

  return (
    <div>
      <h1>Redux Toolkit Counter</h1>

      <h2>Counter: {count}</h2>

      <button onClick={() => dispatch(increment())}>
        Increment
      </button>

      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>

      <button onClick={() => dispatch(reset())}>
        Reset
      </button>

      <hr />

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button
        onClick={() => dispatch(incrementByAmount(Number(amount)))}
      >
        Increment By Amount
      </button>
    </div>
  );
}

export default App;