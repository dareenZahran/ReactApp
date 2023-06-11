import React,{ useState , useEffect}  from "react";
// import { useState , useEffect} from "react";
import './home.css';
import CategoryCard from "../components/CategoryCard";

const Home = () =>{
    const [categories,setCategories]=useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
          .then((res) => res.json())
          .then((data) => {
            console.log('data', data.categories);
            setCategories(data.categories);
          })
          .catch((err) => console.log('err', err));
      }, []);


      return(
        <div className="home-div">
             <div className="category-list">
        {categories.map((category) => {
          return <div className="product-list"><CategoryCard key={category.idCategory} category={category} /></div>
        })}
      </div>
        </div>
      )
    
}

export default Home;