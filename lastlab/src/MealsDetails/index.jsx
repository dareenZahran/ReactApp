import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MealDetails.css';
const MealsDetailsPage = () => {
  const params = useParams();
  const { idMeal } = params;
console.log('idmeal',idMeal);

const [meal, setMeals]=useState([]);

  useEffect(() => {


        
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("rrrrr",data.meals[0])
        setMeals(data.meals[0]);
        //console.log('meal dfg',meal);
        //console.log('data.meals',data.meals);
      });

  }, []);

  console.log('params', params);
  return (
    <div>
      <h1>Meal Details | {idMeal}</h1>
      <div className="meal-image">
      <img src = {meal.strMealThumb}/>
    </div>
    <h3 className="meal-details">{meal.strMeal}</h3>
    <p className="meal-details">{meal.strInstructions}</p>
    </div>
  );
};

export default MealsDetailsPage;
