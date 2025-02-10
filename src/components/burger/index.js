import React from "react";
import BurgerIngredient from "../burgerIngredient";

const Burger = () => {
    return ( 
        <div>
        <BurgerIngredient type="breadTop"/>
        <BurgerIngredient type="salad"/>
        <BurgerIngredient type="bacon"/>
        <BurgerIngredient type="cheese"/>
        <BurgerIngredient type="meat"/>
        <BurgerIngredient type="meat"/>
        </div>
    )
}


export default Burger;