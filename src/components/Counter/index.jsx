import "./style.css";

export default function Counter() {
  return (
    <div className="counter-container">
      <div className="counter-defense-container">
        <h2>Defense</h2>
        <h3>10</h3>
      </div>
      <div className="counter-ofense-container">
        <h2>Ofense</h2>
        <h3>15</h3>
      </div>
    </div>
  );
}
