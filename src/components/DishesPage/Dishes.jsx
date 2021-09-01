import React, { useState } from "react";
import "./Dishes.scss";
function Dishes({ dishesData }) {
  console.log(dishesData);

  let maxDishes = 8;

  let menuIteam = dishesData.map((iteam,index) => {
      if(index < maxDishes ){
        return (
            <li>
              <img
                src={iteam.strMealThumb}
                alt="dish img"
                className="dish-iteam-img br-10"
              />
              <h5 className="dish-name">{iteam.strMeal}</h5>
            </li>
          );
      }
   
  });


  return (
    <div className="dishes">
      <div className="container">
        <h2 className="text-center">Our Special Dishes</h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est iusto
          dolores nihil cum, totam quod officia sit nulla iure et Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Est iusto dolores nihil
          cum.
        </p>
        <div className="dish-iteams section">
            <ul className='dish-iteam-wrapper'>
                {menuIteam}
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Dishes;
