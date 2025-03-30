import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 60000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <h2>TIME: {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit"})}</h2>
  );
}

export default Clock;
