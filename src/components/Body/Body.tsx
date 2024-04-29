import { BodyArea } from "./Body.styled";

import EmptyCard from "../EmptyCard/EmptyCard";
export default function Body() {
  return (
    <>
      <div className="container">
        <h3>Avatar</h3>
        <img src="" alt="" />
      </div>
      <BodyArea>
        <EmptyCard />
        <EmptyCard />
        <EmptyCard />
        <EmptyCard />
        <EmptyCard />
      </BodyArea>
    </>
  );
}
