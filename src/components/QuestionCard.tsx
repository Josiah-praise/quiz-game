import { type Question } from "../types";

export default function QuestionCard({
  question,
  onAnswer,
  selectedAnswer,
  showExplanation,
}: {
  question: Question;
  onAnswer: (answer: string) => void;
  selectedAnswer: string | null;
  showExplanation: boolean;
}) {
  return (
    <div className="space-y-6">
      {/* Question Text */}
      <h2 className="text-2xl font-semibold text-gray-800">
        {question.question}
      </h2>

      {/* Options */}
      <div className="grid gap-4">
        {question.options.map((option) => {
          const isSelected = option === selectedAnswer;
          const isCorrect = option === question.correctAnswer;

          let bgColor = "bg-white dark:bg-gray-800";
          let borderColor = "border-gray-300 dark:border-gray-600";
          let hover = "hover:bg-indigo-50 dark:hover:bg-gray-700";
          let textColor = "text-gray-800 dark:text-gray-100";

          if (showExplanation) {
            if (isCorrect) {
              bgColor = "bg-green-100 dark:bg-green-800";
              borderColor = "border-green-500 dark:border-green-400";
            } else if (isSelected) {
              bgColor = "bg-red-100 dark:bg-red-800";
              borderColor = "border-red-500 dark:border-red-400";
            }
          }

          return (
            <button
              key={option}
              onClick={() => onAnswer(option)}
              disabled={!!selectedAnswer}
              className={`w-full px-6 py-3 text-left rounded-xl border ${bgColor} ${borderColor} ${textColor} ${hover} transition duration-200`}
            >
              <span className="font-medium">{option}</span>
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {showExplanation && (
        <div className="mt-4 p-4 border-l-4 border-indigo-500 bg-indigo-50 dark:bg-indigo-900 dark:text-indigo-100 text-indigo-800 rounded">
          💡 <strong>Explanation:</strong> {question.explanation}
        </div>
      )}
    </div>
  );
}
