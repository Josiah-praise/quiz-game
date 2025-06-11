export type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
};

export type Answer = {
  questionId: number;
  selected: string;
  isCorrect: boolean;
};
