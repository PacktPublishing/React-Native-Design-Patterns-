import { useState, useEffect } from "react";

export const useScreenTimer = () => {
  const [seconds, setSeconds] = useState(0);
  
  useEffect(() => {
    let timer = setInterval(() => setSeconds(seconds + 1), 1000);
    return () => clearInterval(timer);
  });

  return {
    seconds,
    setSeconds
  };
};
