import { useState, useEffect, useCallback } from "react";
import { useCompletion } from "ai/react";

import MainLayout from "@/layouts/MainLayout";
import Instructions from "@/containers/Instructions";
import { Question, useQuizStore } from "@/hooks/useQuizStore";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const quizStore = useQuizStore();
  const prompt =
    "Give me a json array with 5 questions and answers. Do not write anything else. Each question will have 4 different options, 1 answer and 1 randomized point with ranges from 50 to 100. The data model should be in the following format: { question: 'What is 5 + 5?', options: ['1', '2', '3', '10'], answer: '10', points: 100 }";

  const { complete } = useCompletion({
    api: "/api/openai",
    initialInput: prompt,
  });

  const fetchedQuestions = useCallback(
    async (prompt: string): Promise<Question[]> => {
      const completion = await complete(prompt);

      return JSON.parse(completion as string);
    },
    [complete]
  );

  useEffect(() => {
    fetchedQuestions(prompt).then((questions) => {
      setLoading(false);
      quizStore.setQuestionList(questions);
    });
  }, [fetchedQuestions]);

  return (
    <MainLayout>
      <Instructions loading={loading} />
    </MainLayout>
  );
}
