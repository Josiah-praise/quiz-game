import { useEffect, useState } from "react";
import { loadQuestions } from "./utils/loadQuestions";
import { type Question } from "./types";
import QuestionCard from "./components/QuestionCard";
import { useCountdown } from "./hooks/useCountDown";
import TimerBar from "./components/TimerBar";
import ResultCard from "./components/ResultCard";
import "./App.css";

function App() {
  const [questions] = useState<Question[]>(loadQuestions());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = questions[currentIndex];
  const TIMER_DURATION = 10;

  const { timeLeft, reset: resetTimer } = useCountdown({
    seconds: TIMER_DURATION,
    onComplete: () => {
      handleAnswer(""); // Time's up
    },
  });

  function handleAnswer(selected: string) {
    const isCorrect = selected === currentQuestion.correctAnswer;
    if (isCorrect) setScore((prev) => prev + 1);

    const nextIndex = currentIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
      resetTimer();
    } else {
      setShowResult(true);
    }
  }

  function handleRetry() {
    setCurrentIndex(0);
    setScore(0);
    setShowResult(false);
    resetTimer();
  }

  useEffect(() => {
    resetTimer();
  }, [currentIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-3xl p-8 sm:p-10 space-y-8">
        <header className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-indigo-700">
            {showResult
              ? "Your Result"
              : `Question ${currentIndex + 1} of ${questions.length}`}
          </h1>
          {!showResult && (
            <p className="text-sm text-gray-500 mt-1">
              Answer quickly! You have {TIMER_DURATION} seconds.
            </p>
          )}
        </header>

        {!showResult ? (
          <>
            <TimerBar timeLeft={timeLeft} totalTime={TIMER_DURATION} />
            <QuestionCard question={currentQuestion} onAnswer={handleAnswer} />
          </>
        ) : (
          <ResultCard
            score={score}
            total={questions.length}
            onRetry={handleRetry}
          />
        )}
      </div>
    </div>
  );
}

export default App;
