import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  //for default state
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.ammount;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    //agar item phele se hi hai toh uski jatch krne k liye use this.

    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        ammount: existingCartItem.ammount + action.item.ammount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    // const existingCartItemIndex = state.findIndex(
    //   (item) => item.id === action.id
    // );
    const exsitingItem = state.items[existingCartItemIndex];
const updatedTotalAmount=state.totalAmount-exsitingItem.price
    let updatedItems;

    if (exsitingItem.ammount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...exsitingItem,
        ammount: exsitingItem.ammount - 1,
      };
      updatedItems=[...state.items]
      updatedItems[existingCartItemIndex]=updatedItem;
    }
    return{
      items:updatedItems,
      totalAmount:updatedTotalAmount
    }
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandeler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemToCartHandeler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandeler,
    deleteItem: removeItemToCartHandeler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

//props.children?
//props.children ka matlab yeh hai jaise ki hmne koi bhi component khi pe use kra toh
//uske jo chledren honge wo bhi render ho jayenge.
//children means that jb bhi hum us component ko khi use krenge or kuch b extra usme dalenge
//tohn wo khud render ho jaiga.

//matlab jha bhi hum  cartprovider ka use krenge uske anadr jo bhi component honge wo automatically
//context ko access krenge isiliye hmne props.children dala yhan taki app.js mae kewal
//cartProvider dalna pde jha pae bhi hme use krna ho data.

//why we use useSate here in this?
//because eski state change hone se jo jo esle child component hai unki state automatic
//change ho jaigi.
