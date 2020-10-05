import React, { useState, useEffect } from "react";
import "../css/RecipeInfo.css";
import { useParams } from "react-router-dom";
import { database } from "../firebase";
import Footer from "./Footer";

function RecipeInfo() {
  let { id } = useParams();

  const [data, setData] = useState();

  useEffect(() => {
    var singleData = database.ref(`value/${id}`);
    singleData.on("value", (snapchot) => {
      setData(snapchot.val());
    });
  }, []);
  console.log(data);

  return (
    <div className="recipeInfo">
      {data ? (
        <div className="recipeInfo__container">
          <div className="recipeInfo__nav">
            <h1 className="recipeInfo__title">{data.name}</h1>
            <div className="recipeInfo__navInfo">
              <div className="recipeInfo__flex">
                <p>Rating: </p>
                {Array(data.rating)
                  .fill()
                  .map((_, i) => (
                    <p>⭐</p>
                  ))}
              </div>
              <div className="recipeInfo__flex">
                <p>Tags:</p>
                <div className="recipeInfo__flex">
                  {data.tags.map((tag) => (
                    <p>{tag} </p>
                  ))}
                </div>
              </div>
              <div className="recipeInfo__flex">
                <p>Servings: {data.servings}</p>
              </div>
            </div>
          </div>
          <div className="recipeInfo__content">
            <div className="col left">
              <h2 className="col-title">Ingredients:</h2>
              <ul>
                {data.ingredients.map((ingredient) => (
                  <li>{ingredient}</li>
                ))}
              </ul>
            </div>
            <div className="col">
              <img src={data.image} alt="image" className="recipeInfo__image" />
            </div>
            <div className="col right">
              <h2 className="col-title">Instructions:</h2>
              <p className="recipeInfo__description">{data.instructions}</p>
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        "loading"
      )}
    </div>
  );
}

export default RecipeInfo;
