import React from "react";
import { Card as AntCard } from "antd";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <AntCard
      className={`flex items-center justify-center border-borderBlack shadow-card min-w-72 max-w-2xl ${className}`}
    >
      {children}
    </AntCard>
  );
};

export default Card;
