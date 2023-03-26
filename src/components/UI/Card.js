import classes from "./Card.module.css";

const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};
export default Card;

//matlab hmne card component bna dia ab wo jisko wrap up krega wohi props.children ki jagah aa 
//jaiga.
