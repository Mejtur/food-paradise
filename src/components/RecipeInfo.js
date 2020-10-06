import React, { useState, useEffect, useContext } from "react";
import "../css/RecipeInfo.css";
import { useParams } from "react-router-dom";
import { db, auth, database } from "../firebase";
import Footer from "./Footer";
import { MdFavorite } from "react-icons/md";
import { RecipeContext } from "../context/RecipeContext";
function RecipeInfo() {
  let { id } = useParams();

  const [isFavourite, setIsFavourite] = useState(false);
  const [data, setData] = useState();
  const { user } = useContext(RecipeContext);

  useEffect(() => {
    var singleData = database.ref(`value/${id}`);
    singleData.on("value", (snapchot) => {
      setData(snapchot.val());
    });
  }, []);
  console.log(data);

  const addToFavourites = async (data) => {
    const currentUser = await auth.currentUser;

    const databaseRef = await database
      .ref(currentUser.uid)
      .child("favourites")
      .child(id)
      .set(data);
  };

  return (
    <div className="recipeInfo">
      {data ? (
        <div className="recipeInfo__container">
          <div className="recipeInfo__nav">
            <div className="recipeInfo__header">
              <h1 className="recipeInfo__title">{data.name}</h1>
              <p
                className="recipeInfo__favourites"
                onClick={() => {
                  addToFavourites(data);
                }}
              >
                Add to favourites <MdFavorite />
              </p>
            </div>
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
                  <li key={ingredient}>{ingredient}</li>
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
