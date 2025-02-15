import React from "react";
import css from "./style.module.css";

const BurgerIngredient = (props) => {
    if(props.type == 'salad')
        return <div className={css.Salad}>{props.type}</div>; 
    if (props.type == 'bacon')
        return <div className={css.Bacon}>{props.type}</div>; 
    if (props.type == 'meat')
        return <div className={css.Meat}>{props.type}</div>; 
    if (props.type == 'cheese')
        return <div className={css.Cheese}>{props.type}</div>; 
    if (props.type == 'breadTop')
        return(
        <div className={css.BreadTop}> 
        <div className={css.Seed}></div>
        <div className={css.Seed}></div>
        <div className={css.Seed}></div>
        <div className={css.Seed}></div>    
        </div>
        );
    if (props.type == 'breadBottom')
        return <div className={css.BreadBottom}>{props.type}</div>; 
}   

export default BurgerIngredient;