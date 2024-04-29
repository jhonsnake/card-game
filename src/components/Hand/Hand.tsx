import Card from "../Card/Card";
import { HandWrapper } from "./Hand.styles";

export default function Hand() {
  return (
    <HandWrapper>
      <Card name="Card" color="gray"></Card>
      <Card name="Card" color="gray"></Card>
      <Card name="Card" color="gray"></Card>
      <Card name="Deck" color="gray"></Card>
    </HandWrapper>
  );
}
