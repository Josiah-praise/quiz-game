import rawData from "../data/questions.json";
import { type Question } from "../types";

export function loadQuestions(): Question[] {
  if (!Array.isArray(rawData)) {
    throw new Error("Invalid question format");
  }
  return rawData.map((q, index) => ({
    ...q,
    id: q.id || index + 1, // fallback if no id
  }));
}
