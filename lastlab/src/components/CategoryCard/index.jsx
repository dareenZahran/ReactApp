import React from "react";
import { Link } from 'react-router-dom';
import './Category.css'

const CategoryCard = (props) =>{
    const {category}=props;
    return (
        <Link to={`/category/${category.strCategory}`}>
          <div className="category-card">
            <div className="category-image">
              <img src={category.strCategoryThumb} />
            </div>
            <div>
              <h3>{category.strCategory}</h3>
            </div>
          </div>
        </Link>
      );
}

export default CategoryCard;
