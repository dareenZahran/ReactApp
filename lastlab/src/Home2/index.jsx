import React,{ useState , useEffect}  from "react";
import MealCard from "../MealsCard";
import CategoryCard from "../components/CategoryCard";
import { useParams } from "react-router-dom";
import './home2.css';
const Home2 = () =>{
    const params = useParams();
    const { strCategory } = params;
    const [meals,setMeals]=useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`)
          .then((res) => res.json())
          .then((data) => {
            console.log('data', data.meals);
            setMeals(data.meals);
          })
          .catch((err) => console.log('err', err));
      }, []);


      return(
        <div className="home-div">
             <div className="meal-list">
        {meals?.map((meal) => {
          return <MealCard key={meal.idMeal} meal={meal} />;
        })}
      </div>
        </div>
      )
}
export default Home2;