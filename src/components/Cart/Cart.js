import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItemRemoveHandeler = (id) => {
    cartCtx.deleteItem(id)
  };

  const cartItenAddHandeler = (item) => {
    cartCtx.addItem({...item,ammount:1})
  };

  const totalAmmount = `₹ ${cartCtx.totalAmount}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItem = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.ammount}
          price={item.price}
          onRemove={cartItemRemoveHandeler.bind(null,item.id)}
          onAdd={cartItenAddHandeler.bind(null,item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Ammount</span>
        <span>{totalAmmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
