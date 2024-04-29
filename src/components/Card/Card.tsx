// Card.tsx
import React from "react";
import { CardWrapper, CardContent, CardName } from "./Card.styled";

interface CardProps {
  name: string;
  color: string;
}

const Card: React.FC<CardProps> = ({ name, color }) => {
  return (
    <CardWrapper color={color}>
      <CardContent>
        <CardName>{name}</CardName>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;
