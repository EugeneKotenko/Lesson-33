import React, { useState } from "react";
import { Button } from "antd";
import * as buttonStyles from './button.module.scss'
import * as containerStyles from './container.module.scss'

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
    <div className={containerStyles.container}>
      <h1>Counter</h1>
      <div className={containerStyles.counter}>
        <Button
          className={buttonStyles.decrementBtn}
          onClick={decrement}
        >
          -
        </Button>
        <p className={containerStyles.value}>{counter}</p>
        <Button
          className={buttonStyles.incrementBtn}
          onClick={increment}
        >
          +
        </Button>
      </div>
      <Button className={buttonStyles.resetBtn} onClick={reset}>
        reset
      </Button>
    </div>
  );
}

export default App;

