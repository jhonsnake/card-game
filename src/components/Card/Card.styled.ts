// Card.styled.ts
import styled from "styled-components";

export const CardWrapper = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  border: 2px solid #000;
  border-radius: 8px;
  width: 80px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardContent = styled.div`
  text-align: center;
`;

export const CardName = styled.h2`
  color: #fff;
  font-size: 24px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;
