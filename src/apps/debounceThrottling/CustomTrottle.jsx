import React, { useState, useCallback } from "react";

// Ques 2 - Create a button UI and add throttle as follows =>
//   --> Show "Button Pressed ‹X› Times" every time button is pressed
//   --> Increase "Triggered <Y> Tinfes"
//   every 800ms of throttle

const CustomThrottle = () => {
  const [count, setCount] = useState(0);
  const [throttleCount, setThrottleCount] = useState(0);

  const myThrottle = (cb, delay) => {
    let last = 0;
    return function (...args) {
      const now = new Date().getTime();
      if (now - last < delay) return;
      last = now;
      return cb(...args);
    };
  };

  const throttleCountFunction = useCallback(
    myThrottle(() => {
      setThrottleCount((prev) => prev + 1);
    }, 2000),
    []
  );

  const handleIncrement = (e) => {
    setCount((prev) => prev + 1);
    throttleCountFunction();
  };

  return (
    <div>
      <h2>Custom Throttle</h2>
      <div>Button pressed {count}</div>
      <div>Triggered {throttleCount}</div>
      <button onClick={(e) => handleIncrement(e)}>Increment</button>
    </div>
  );
};

export default CustomThrottle;
