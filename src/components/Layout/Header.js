import mealsImage from "../../assets/mel.jpg"; //format to use images in react -> see img tag
import classes from "./Header.module.css";
import React from "react";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>MS Cafe</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="food-img"></img>
      </div>
    </React.Fragment>
  );
};
export default Header;

//for one root element we use react.fragment.
//jb class name mae '-' ho to usko [eske andar likhte check img div for info]
