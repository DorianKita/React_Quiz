import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout, mode }) {
  const [remainingTime, setRemainingTiem] = useState(timeout);

  useEffect(() => {
    const timeoutIndex = setTimeout(onTimeout, timeout);

    return () => clearTimeout(timeoutIndex);
  }, [timeout, onTimeout]);

  useEffect(() => {
    const intervalIndex = setInterval(() => {
      setRemainingTiem((prev) => prev - 10);
    }, 10);

    return () => clearInterval(intervalIndex);
  }, []);

  return (
    <progress
      id="question-time"
      value={remainingTime}
      max={timeout}
      className={mode}
    />
  );
}
