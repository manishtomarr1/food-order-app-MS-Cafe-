import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const [validAmmount, updatedAmmountValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmmount = amountInputRef.current.value; //this is an string by default
    const enteredAmmountNumber = +enteredAmmount; //convert string to number

    if (
      enteredAmmount.trim().length === 0 ||
      enteredAmmountNumber < 1 ||
      enteredAmmountNumber > 5
    ) {
      updatedAmmountValid(false);
      return;
    }

    props.onAddToCart(enteredAmmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!validAmmount && <p>please enter a valid ammount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;

//es component se hum kewal ammount lere hai na toh ammount yhi pae manage hoga.
