// useCallback Hook 

// Performance Optimization 

// useCallback caches a function defination betweeen renders untill its dependencies change


// practical ->parent and child components

import { memo } from "react";

const Child = memo(function Child({ onClick }) {
  console.log("Child rendered");

  return (
    <button onClick={onClick}>
      Click Child
    </button>
  );
});

export default Child;