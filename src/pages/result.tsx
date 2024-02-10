import React from "react";
import MainLayout from "@/layouts/MainLayout";
import Result from "@/containers/Result";
import Confetti from "react-confetti";

const QuizResultsPage: React.FC = () => {
  return (
    <MainLayout>
      <Confetti gravity={0.05} numberOfPieces={2000} recycle={false} />
      <Result />
    </MainLayout>
  );
};

export default QuizResultsPage;
