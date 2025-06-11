type TimerBarProps = {
  timeLeft: number;
  totalTime: number;
};

export default function TimerBar({ timeLeft, totalTime }: TimerBarProps) {
  const percentage = (timeLeft / totalTime) * 100;

  return (
    <div className="w-full h-4 rounded-full bg-gray-200 mb-6 overflow-hidden">
      <div
        className={`h-full transition-all duration-1000 ease-linear ${
          percentage <= 20 ? "bg-red-500" : "bg-green-500"
        }`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
}
