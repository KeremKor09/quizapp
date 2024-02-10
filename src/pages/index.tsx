import { useEffect } from "react";
import OpenAI from "openai";

import MainLayout from "@/layouts/MainLayout";
import Instructions from "@/containers/Instructions";
import { Question, useQuizStore } from "@/hooks/useQuizStore";
import { NextPageContext } from "next";

export default function Home({
  fetchedQuestions,
}: {
  fetchedQuestions: Question[];
}) {
  const quizStore = useQuizStore();

  useEffect(() => {
    quizStore.setQuestionList(fetchedQuestions);
  }, []);

  return (
    <MainLayout>
      <Instructions />
    </MainLayout>
  );
}

export const getServerSideProps = async ({ ctx }: { ctx: NextPageContext }) => {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const prompt =
    "Give me a json array with 5 questions and answers. Do not write anything else. Each question will have 4 different options, 1 answer and 1 randomized point with ranges from 50 to 100. The data model should be in the following format: { question: 'What is 5 + 5?', options: ['1', '2', '3', '10'], answer: '10', points: 100 }";

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: prompt,
      },
    ],
    model: "gpt-3.5-turbo",
  });

  const fetchedQuestions = JSON.parse(
    completion.choices[0].message.content as string
  );

  return {
    props: { fetchedQuestions: fetchedQuestions },
  };
};
