import React from 'react';
import clasees from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burguer = (props) => {
    return (
        <div className={clasees.Burger}>
            <BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burguer;