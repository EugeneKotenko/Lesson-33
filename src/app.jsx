import React, { useState } from "react";
import { Button } from "antd";
import * as buttonStyles from './button.module.scss'

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
        <Button
          className={buttonStyles.decrementBtn}
          onClick={decrement}
        >
          -
        </Button>
        <p id="counter-value">{counter}</p>
        <Button
          className={buttonStyles.incrementBtn}
          onClick={increment}
        >
          +
        </Button>
      </div>
      <Button id="reset" onClick={reset}>
        reset
      </Button>
    </div>
  );
}

export default App;
