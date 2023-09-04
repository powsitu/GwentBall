import "./style.css";

export default function Card() {
  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80"
        alt=""
      />
      <div className="card-content">
        <h2>Card Heading</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          exercitationem iste, voluptatum, quia explicabo laboriosam rem
          adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa
          asperiores harum? Dicta odio aut hic.
        </p>
      </div>
    </div>
  );
}
