import React, { useCallback, useState } from "react";
import _ from "lodash";

// Ques 1 - Create a button UI and add debounce as follows =>
//     --> Show "Button Pressed ‹X> Times" every time button is pressed
//     --> Increase "Triggered ‹Y> Times" count after 800ms of debounce

const DebounceEx2 = () => {
  const [count, setCount] = useState(0);
  const [triggeredCount, setTriggeredCount] = useState(0);

  const incrementFunction = () => {
    setCount((prev) => prev + 1);
    debounceCount();
  };

  const debounceCount = useCallback(
    _.debounce(() => {
      setTriggeredCount((prev) => prev + 1);
    }, 500),
    []
  );

  return (
    <div>
      <h2> Debounce Ex2</h2>
      <button onClick={incrementFunction}>Increment</button>
      <div>Button pressed {count} times</div>
      <div>Triggered {triggeredCount} times</div>
    </div>
  );
};

export default DebounceEx2;
