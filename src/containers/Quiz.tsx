import React, { use, useEffect, useMemo, useState } from "react";
import { Steps, Typography } from "antd";
import "tailwindcss/tailwind.css";
import { Question, useQuizStore } from "@/hooks/useQuizStore";

import Button from "components/Button";
import Colors from "components/colors";
import { useRouter } from "next/router";
import ProgressBar from "@/components/ProgressBar";

type ButtonColor = keyof typeof Colors;

function shuffle(array: ButtonColor[]) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const Quiz: React.FC = () => {
  const router = useRouter();
  const quizStore = useQuizStore();

  const [currentStep, setCurrentStep] = useState(0);
  const questionList = useQuizStore((state) => state.questionList);
  const [buttonColors, setButtonColors] = useState(
    shuffle(["Pink", "Green", "Yellow", "Blue"])
  );
  const [isDisabled, setIsDisabled] = useState(false);
  const progress = useMemo(
    () => ((currentStep + 1) / questionList.length) * 100,
    [currentStep, questionList.length]
  );
  const [correctCount, setCorrectCount] = useState(0);
  const [points, setPoints] = useState(0);

  const handleNext = (selectedOption: string) => {
    setIsDisabled(true);

    const isCorrect = (option: string) =>
      option === questionList[currentStep].answer;

    const isSelectedOption = (currentOption: string) =>
      currentOption === selectedOption;

    // Update the score based on correctness
    if (isCorrect(selectedOption)) {
      setCorrectCount((prevCount) => prevCount + 1);
      setPoints((prevPoints) => prevPoints + questionList[currentStep].points);
    }

    // Update the variant based on correctness
    const updatedButtonColors = buttonColors.map((color, index) => {
      const currentOption = questionList[currentStep].options[index];

      if (isCorrect(selectedOption)) {
        return isSelectedOption(currentOption) ? "Green" : "White";
      } else {
        if (isSelectedOption(currentOption)) {
          return "Red";
        }
        return isCorrect(currentOption) ? "Green" : "White";
      }
    });

    // Update the state to trigger a re-render with the new variants
    setButtonColors(updatedButtonColors);

    // Show the correct/wrong indication for 3 seconds
    setTimeout(() => {
      // Reset the variants to the original shuffled order
      setButtonColors(shuffle(["Pink", "Green", "Yellow", "Blue"]));
      setIsDisabled(false);

      if (currentStep === questionList.length - 1) {
        // If the last question, move to the result page
        router.push("/result");
      } else {
        // Move to the next question
        setCurrentStep((prevStep) => prevStep + 1);
      }
    }, 2000);
  };

  useEffect(() => {
    quizStore.setPoints(points);
    quizStore.setCorrectCount(correctCount);
  }, [points, correctCount]);

  const renderQuestion = (question: Question) => {
    return (
      <div>
        <Typography.Title level={1} className="mb-4">
          {question.question}
        </Typography.Title>
        <div className="flex flex-wrap items-center justify-center">
          {question.options.map((option, index) => (
            <Button
              disabled={isDisabled}
              key={index}
              title={option}
              className="w-1/3 m-5 mx-6"
              variant={buttonColors[index]}
              onClick={() => handleNext(option)}
            >
              {option}
            </Button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="container p-4 max-w-5xl">
      <div className="flex justify-between">
        <p className="font-bold">
          Question {currentStep + 1} / {questionList.length}
        </p>
        <p className="font-bold">Score: {points}</p>
      </div>
      <ProgressBar percent={progress} />

      <div className="mt-4">
        {questionList.map((question, index) => (
          <div key={index} className={index === currentStep ? "" : "hidden"}>
            {renderQuestion(question)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
