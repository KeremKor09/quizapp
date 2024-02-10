import React, { useState } from "react";
import { Typography } from "antd";

import Button from "components/Button";
import Card from "components/Card";
import { useRouter } from "next/router";
import { useQuizStore } from "@/hooks/useQuizStore";

const Result: React.FC = () => {
  const router = useRouter();

  const numberOfQuestions = useQuizStore((state) => state.questionList.length);
  const correctCount = useQuizStore((state) => state.correctCount);
  const points = useQuizStore((state) => state.points);

  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRestart = () => {
    setDisabled(true);
    setLoading(true);
    router.push("/");
  };

  return (
    <Card className="md:px-36">
      <Typography.Title className="text-center" level={2}>
        Result
      </Typography.Title>
      <div>
        <Typography.Title className="text-center" level={3}>
          {correctCount} OUT OF {numberOfQuestions}
        </Typography.Title>
        <Typography.Title className="text-center" level={3}>
          {points} POINTS
        </Typography.Title>
      </div>

      <Button
        onClick={() => handleRestart()}
        disabled={disabled}
        loading={loading}
        title="RESTART QUIZ"
        variant="Blue"
        className="mt-20"
      />
    </Card>
  );
};

export default Result;
