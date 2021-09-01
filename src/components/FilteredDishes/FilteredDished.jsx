import React, { useState } from "react";
import "./FilteredDished.scss";
function FilteredDished({ filterMenus , allMenus , singleDish, setSingleDish }) {
  const [menus,setMenus] = useState(allMenus);
  const [filteredDishes,setFilteredDishes] = useState([]);
  const [activeDish,setActiveDish] = useState('Beef');

  /*  SHOW ONLY SINGLE DISHES */
  let singleDishes = singleDish.map((iteam)=>{
    return(
      <li>
        <img src={iteam.strMealThumb} alt="meal pic" />
        <h3>{iteam.strMeal}</h3>
      </li>
    )
  })
  /* SHOW DISHES ON CLICK */
  const showFilteredDishsesHandler = (FilteredCategory) =>{
    setSingleDish([]);
    setActiveDish(FilteredCategory);
    let FilteredDishesAre = menus.filter((iteam)=>{
     return iteam.strCategory === FilteredCategory
    }).map((iteam)=>{
      return(
        <li>
          <img src={iteam.strMealThumb} alt="meal pic" />
          <h3>{iteam.strMeal}</h3>
        </li>
      )
    })
    setFilteredDishes(FilteredDishesAre);
  }

  /* SHOW ALL CATEGORIES */
  let filterName = filterMenus.map((iteam)=>{
      return(
          <li className={iteam.strCategory == activeDish ? 'active' : ''} onClick={()=> showFilteredDishsesHandler(iteam.strCategory)}>{iteam.strCategory}</li>
      )
  })
  /* RENDIRING */
  return (
    <div className="filtered-dish">
      <div className="container">
        <div className="text-center">
          <h2>Choose Your Dishes</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            neque rem inventore facilis harum dolor nostrum tempore quod eius
            dolore?
          </p>
        </div>
        <div className='dish-wrapper'>
            <ul>
                {filterName}
            </ul>
        </div>
        <div className='filtered-dishes-result'>
          <ul >
          {singleDishes.length > 0 ? singleDishes : ""}
         {filteredDishes.length > 0 ? filteredDishes : <p className="no-iteams-found">No Iteams Found</p>}  
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FilteredDished;
