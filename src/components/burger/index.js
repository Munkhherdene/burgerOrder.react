import React from "react";
import BurgerIngredient from "../burgerIngredient";
import css from "./style.module.css";

const Burger = () => {
    return ( 
        <div className={css.Burger}>
        <BurgerIngredient type="breadTop"/>
        <BurgerIngredient type="salad"/>
        <BurgerIngredient type="bacon"/>
        <BurgerIngredient type="cheese"/>
        <BurgerIngredient type="meat"/>
        <BurgerIngredient type="meat"/>
        <BurgerIngredient type="breadBottom"/>
        </div>
    )
}


export default Burger;