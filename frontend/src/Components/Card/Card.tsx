import "./Card.css";

type Props = {};

const Card = (props: Props) => {
  return (
    <div className="card">
      <img
        src="https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w="
        alt="apple"
      ></img>
      <div className="details">
        <h2>AAPL</h2>
        <p>$200</p>
      </div>
      <p className="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        nulla.
      </p>
    </div>
  );
};

export default Card;
