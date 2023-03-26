import classes from "./ViewMeals.module.css";
import Meals from "../Meals/Meals";
import React, { useState } from "react";

const ViewMeals = () => {
  const [viewMealState, updatedMealState] = useState(false);
  const mealClickHandeler = () => {
    updatedMealState(true);
  };

  return (
    <div className={classes["view-meals"]}>
      <button onClick={mealClickHandeler}>View Meals</button>
      {viewMealState && <Meals />}
    </div>
  );
};

export default ViewMeals;
