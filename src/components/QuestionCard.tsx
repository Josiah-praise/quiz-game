import { type Question } from "../types";

export default function QuestionCard({
  question,
  onAnswer,
}: {
  question: Question;
  onAnswer: (answer: string) => void;
}) {
  return (
    <div className="space-y-6">
      {/* Question */}
      <h2 className="text-2xl font-semibold text-gray-80">
        {question.question}
      </h2>

      {/* Options */}
      <div className="grid gap-4">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => onAnswer(option)}
            className="w-full px-6 py-3 text-left rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-indigo-600 hover:border-indigo-400 dark:hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
          >
            <span className="text-gray-800 dark:text-gray-100 font-medium">
              {option}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
