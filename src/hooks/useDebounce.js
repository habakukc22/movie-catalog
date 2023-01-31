import { useRef } from "react";

const useDebounce = (func, delay) => {
  const timeoutRef = useRef(null);

  function debounceFunc(...args) {
    window.clearTimeout(timeoutRef.current);

    timeoutRef.current = window.setTimeout(() => {
      func(...args);
    }, delay);
  }

  return debounceFunc;
};

export default useDebounce;
