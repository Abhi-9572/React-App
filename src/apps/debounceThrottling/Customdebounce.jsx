import React, { useCallback, useState } from "react";

const CustomDebounce = () => {
  const [count, setCount] = useState(0);
  const [triggeredCount, setTriggeredCount] = useState(0);

  const incrementFunction = () => {
    setCount((prev) => prev + 1);
    debounceCount();
  };

  const myDebounce = (cb, delay) => {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  };

  const debounceCount = useCallback(
    myDebounce(() => {
      setTriggeredCount((prev) => prev + 1);
    }, 1500),
    []
  );

  return (
    <div>
      <h2>Custom Debounce</h2>
      <button onClick={incrementFunction}>Increment</button>
      <div>Button pressed {count} times</div>
      <div>Triggered {triggeredCount} times</div>
    </div>
  );
};

export default CustomDebounce;
