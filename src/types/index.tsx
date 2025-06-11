export type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
};

export type Answer = {
  questionId: number;
  selected: string;
  isCorrect: boolean;
};
