import Board from "../Board";
import Counter from "../Counter";
import TurnButton from "../TurnButton";
import "./style.css";

export default function Body() {
  return (
    <div className="body-container">
      <Counter />
      <Board />
      <TurnButton />
    </div>
  );
}
