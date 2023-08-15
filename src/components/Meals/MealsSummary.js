import React from "react";
import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
    return <section className={classes.summary}>
        <h2>Hex's Delicious food delieverd to you!</h2>
        <p>Choose your favorite meal from our huge selection of available meals
            and ejow a delicious lunch or dinner at home.
        </p>
        <p>
            All our meals are cooked with supreme quality ingredients, just in time 
            and of course, by seasoned veteran chefs!
        </p>
    </section>
};

export default MealsSummary;