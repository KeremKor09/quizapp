import { create } from "zustand";

export type Question = {
  question: string;
  options: string[];
  answer: string;
  points: number;
};

interface QuizStore {
  questionList: Question[];
  points: number;
  correctCount: number;
  setQuestionList: (questions: Question[]) => void;
  setPoints: (points: number) => void;
  setCorrectCount: (correctCount: number) => void;
}

export const useQuizStore = create<QuizStore>((set) => ({
  questionList: [],
  points: 0,
  correctCount: 0,
  setQuestionList: (questions) => set({ questionList: questions }),
  setPoints: (points) => set({ points }),
  setCorrectCount: (correctCount) => set({ correctCount }),
}));
