import React from "react";
import "../css/SingeRecipe.css";
import { Link } from "react-router-dom";

function SingleRecipe({
  name,
  image,
  description,
  fat,
  carbs,
  calories,
  protein,
  id,
}) {
  return (
    <div className="singleRecipe">
      <img src={image} alt="no image found" className="singleRecipe__image" />
      <Link
        to={`recipes/${id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="singleRecipe__title">{name}</div>
      </Link>
      <div className="singleRecipe__info">
        {description.substring(0, 120) + "..."}
      </div>
      <div className="singleRecipe__nutrition">
        <div className="singleRecipe__stat">{fat} fat</div>
        <div className="singleRecipe__stat">{carbs} carbs</div>
        <div className="singleRecipe__stat">{protein} protein</div>
        <div className="singleRecipe__stat">{calories} calories</div>
      </div>
    </div>
  );
}

export default SingleRecipe;
