import { useEffect, useState } from "react";

type CountdownOptions = {
  seconds: number;
  onComplete: () => void;
};

export function useCountdown({ seconds, onComplete }: CountdownOptions) {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    if (timeLeft === 0) {
      onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, onComplete]);

  const reset = () => setTimeLeft(seconds);

  return { timeLeft, reset };
}
