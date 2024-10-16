import React, { useState, useCallback } from "react";
import { debounce } from "lodash";

const Debounce = () => {
  const [name, setName] = useState("");

  const debouncedSearch = useCallback(
    debounce(() => {
      console.log("searching");
    }, 1000),
    []
  );

  const handleChange = (text) => {
    setName(text);
    debouncedSearch(text);
  };

  return (
    <div>
      <h2>Lodash Debounce</h2>
      <input
        type="text"
        onChange={(e) => handleChange(e.target.value)}
        value={name}
      />
    </div>
  );
};

export default Debounce;
