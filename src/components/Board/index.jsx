import FootballField from "../../assets/football_field.jpg";
import "./style.css";

export default function Board() {
  return (
    <div className="board-field-container">
      <img
        src={FootballField}
        alt="football field"
        className="football-field"
      ></img>
    </div>
  );
}
