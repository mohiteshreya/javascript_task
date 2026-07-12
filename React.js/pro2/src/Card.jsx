import './Card.css'
import './CardDetails.jsx'
export default function Card({ image, title }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button>Read More</button>
    </div>
  );
}