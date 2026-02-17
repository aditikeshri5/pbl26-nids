import { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-card/90 backdrop-blur-lg border border-border rounded-xl px-4 py-2 shadow-card font-mono text-sm">
      <span className="text-muted-foreground mr-2">⏱</span>
      <span className="text-primary font-semibold">{mm}:{ss}</span>
    </div>
  );
};

export default Timer;
