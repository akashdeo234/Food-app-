import React, { useEffect, useState } from "react";
import Dishes from "./DishesPage/Dishes";
import FilteredDished from "./FilteredDishes/FilteredDished";
import Header from "./Header/Header";

function Menus() {
  const [menu, setMenu] = useState([]);
  const [filteredMenu, setFilteredMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [singleDish,setSingleDish] = useState([]);

  /* GET ALL MENUS */
  async function getAllMenus() {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
    let response = await fetch(API_URL);
    let data = await response.json();
    //console.log(data.meals);
    setMenu(data.meals);
    setLoading(false);
  }

   /* GET ALL CATEGORIES MENU */
  async function filteredMenus() {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
    let response = await fetch(API_URL);
    let data = await response.json();
    // console.log('filtered data' , data.categories);
    setFilteredMenu(data.categories);
  }

   /* GET ONLY SINGLE DISH */
  async function getSingleMenu() {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";
    let response = await fetch(API_URL);
    let data = await response.json();
   // console.log('filtered didisdsadjkas', data.meals);
    setSingleDish(data.meals);
  }

  useEffect(() => {
    getAllMenus();
    filteredMenus();
    getSingleMenu();
  }, []);

  let loadingStyle = {
    color: "white",
    backgroundColor: "grey",
    width: "100%",
    height: "100vh",
    textAlign:'center',
    position: 'absolute',
    top: '0',
    left: '0',
    bottom : '0',
  };
  return (
    <div className="menus">
      <Header />
      {!loading ? (
        <Dishes dishesData={menu} />
      ) : (
        <h1 style={loadingStyle}>loading</h1>
      )}
      {!loading ? (
        <FilteredDished filterMenus={filteredMenu} allMenus={menu} singleDish={singleDish} setSingleDish={setSingleDish} />
      ) : null}
    </div>
  );
}


export default Menus;
