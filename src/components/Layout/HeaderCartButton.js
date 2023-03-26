import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setButtonIsHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);

  const { items } = cartCtx; //object distracting

  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.ammount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`; //this is how we add one or more class
  //agar btnIsHighlighted ho toh hi add wrna " " yeh add ho.

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonIsHighlighted(true);

    const timer = setTimeout(() => {
      setButtonIsHighlighted(false);
    }, 300);

    return () => {
      //cleaner function by react called automatically by react
      clearTimeout(timer); //when effect rerun we clear the timer.
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;

//why we use reduce here?
//because jb hum item ka use kre toh maan k chalo user ne sushi ki 3 ammount add kri interface se
//lakin item array mae to kewal ek hi add hoga bacause user 3 bhar k ek bar click krega
//toh usme length toh 1 hi rhege esse bachne k liye reduce use kra.

//what is reduce does?
//jo ki aaray ko ek single value mae transform kr deta hai.
//currentNumber ki initial value 0 hai.

//useEffect for bump the cart button for every added items.
