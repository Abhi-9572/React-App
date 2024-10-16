import React from "react";
import './InfiniteScrolling.css'

const InfiniteScrolling = () => {
  const items = ["apple", "banana", "grapes"];
  return (
    <div className="__item_list">
      {items?.map((item) => (
        <ul >
          <li key={item}>{item}</li>
        </ul>
      ))}
    </div>
  );
};

export default InfiniteScrolling;
