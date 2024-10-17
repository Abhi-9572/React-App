// import { debounce } from "lodash";
// import React, { useState } from "react";

// const Debounce1 = () => {
//   const [name, setName] = useState("");
//   const search = (value) => {
//     console.log(value);
//     setName(value);
//   };
//   const debounceSearch = debounce(search, 1000);
//   return (
//     <div>
//       <h2>Debounce example 1</h2>
//       <input
//         type="text"
//         onChange={(e) => debounceSearch(e.target.value)}
//         value={name}
//       />
//     </div>
//   );
// };

// export default Debounce1;

// above one is in correct way

import { debounce } from "lodash";
import React, { useCallback, useState } from "react";

const DebounceEx1 = () => {
  const [name, setName] = useState("");
  const search = (value) => {
    console.log(value);
  };
  const debounceSearch = useCallback(debounce(search, 1000), []);
  return (
    <div>
      <h2>Debounce example 1</h2>
      <input
        type="text"
        onChange={(e) => {
          debounceSearch(e.target.value);
          setName(e.target.value);
        }}
        value={name}
      />
    </div>
  );
};

export default DebounceEx1;
