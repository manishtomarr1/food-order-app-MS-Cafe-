import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import {useState} from "react";
import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Layout/Footer";

function App() {

  const [cartIsShown,setCartIsShown] = useState(false);

  const shownCartHandeler=()=>{
    setCartIsShown(true);
  }

  const hideCartShowHandeler=()=>{
    setCartIsShown(false)
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartShowHandeler} />}
      <Header onShowCart={shownCartHandeler} />
      <main>
        <Meals />
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
