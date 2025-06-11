import { useEffect, useState } from "react";

type ResultCardProps = {
  score: number;
  total: number;
  onRetry: () => void;
};

export default function ResultCard({ score, total, onRetry }: ResultCardProps) {
  const [highScore, setHighScore] = useState<number>(0);
  const [isNewHighScore, setIsNewHighScore] = useState<boolean>(false);

  useEffect(() => {
    const storedHigh = Number(localStorage.getItem("highScore") || 0);
    if (score > storedHigh) {
      localStorage.setItem("highScore", score.toString());
      setHighScore(score);
      setIsNewHighScore(true);
    } else {
      setHighScore(storedHigh);
    }
  }, [score]);

  return (
    <div className="text-center space-y-6">
      <h2 className="text-3xl font-bold text-indigo-700">🎉 Quiz Complete!</h2>

      <div className="text-xl space-y-2">
        <p className="text-gray-700">
          Your Score:{" "}
          <span className="font-semibold text-indigo-600">
            {score} / {total}
          </span>
        </p>

        <p className="text-gray-700">
          🏆 High Score:{" "}
          <span className="font-semibold text-green-600">{highScore}</span>
          {isNewHighScore && (
            <span className="ml-2 inline-block animate-bounce text-green-600 font-medium">
              ⬆️ New High Score!
            </span>
          )}
        </p>
      </div>

      <button
        onClick={onRetry}
        className="mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-lg font-semibold rounded-xl shadow transition duration-200 text-black dark:text-white" 
      >
        🔁 Try Again
      </button>
    </div>
  );
}
