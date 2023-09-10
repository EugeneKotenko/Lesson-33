import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div className="container">
      <h1>Counter</h1>
      <div className="counter">
        <button id="decrement-btn" onClick={decrement}>-</button>
        <p id="counter-value">{counter}</p>
        <button id="increment-btn" onClick={increment}>+</button>
      </div>
      <button id="reset" onClick={reset}>reset</button>
    </div>
  );
}

export default App;