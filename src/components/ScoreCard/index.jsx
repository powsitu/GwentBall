import "./style.css";

export default function ScoreCard() {
  return (
    <div className="score-card-container">
      <div className="score-card-team">
        <div className="score-card-team-name">Player 1</div>
        <div className="score-card-team-score">0</div>
      </div>
      <div className="score-card-separator">:</div>
      <div className="score-card-team">
        <div className="score-card-team-name">Player 2</div>
        <div className="score-card-team-score">0</div>
      </div>
    </div>
  );
}
