import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  
  const price = `₹${props.price.toFixed(2)}`;

  const addToCartHandler = (ammount) => {
  
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      ammount: ammount,
      price: props.price,
    }); 
    // kyuki yeh avaliable meals mae import hora hai toh yeh uska child component Hua 
    // toh wo data by props yha aayega
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
        {/* kyuki onAddToCart mealItemForm mae lia tha hmnee */}
      </div>
    </li>
  );
};

export default MealItem;
