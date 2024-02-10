import React, { useEffect, useState } from "react";
import { Typography } from "antd";

import Button from "components/Button";
import Card from "components/Card";
import List from "components/List";
import { useRouter } from "next/router";

const Instructions: React.FC<{ loading: boolean }> = ({ loading }) => {
  const [isLoading, setLoading] = useState(loading);

  const instructions = [
    "Quiz has 5 questions in total.",
    "Once you submit an answer, no option to go back.",
    "Each question has points, and you final score will be calculated based on them.",
    "The quiz auto-progresses to the next question after answering.",
  ];

  useEffect(() => {
    setLoading(loading);
  }, [loading]);

  const router = useRouter();

  return (
    <Card>
      <Typography.Title className="font-inter p-5 m-5 text-center" level={1}>
        Spiky Quiz App
      </Typography.Title>
      <List texts={instructions} />
      <Button
        loading={isLoading}
        variant="Green"
        title="START QUIZ"
        onClick={() => {
          router.push("/quiz");
        }}
      />
    </Card>
  );
};

export default Instructions;
