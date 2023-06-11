import React from "react";
import { Link } from 'react-router-dom';
import './MealsCard.css';
const MealCard = (props) =>{
    const {meal}=props;
    // const category = {"idCategory":"1","strCategory":"Beef","strCategoryThumb":"https:\/\/www.themealdb.com\/images\/category\/beef.png","strCategoryDescription":"Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]"}
    return (
        <Link to={`/meals/${meal.idMeal}`}>
          <div className="meal-card">
            <div className="meal-image">
              <img src={meal.strMealThumb} />
            </div>
            <div>
              <h3>Perfum</h3>
            </div>
          </div>
        </Link>
      );
}

export default MealCard;
