import React from "react";
import { Link } from "react-router-dom";

function MealCard({ meal }) {
  return (
    <div className="col mb-4">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={meal.strMealThumb}
          className="card-img-top"
          alt={meal.strMeal}
        />
        <div className="card-body">
          <h5 className="card-title">{meal.strMeal}</h5>
          <Link to={`/meal/${meal.idMeal}`} className="btn btn-primary">
            Atvert edienu
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MealCard;
