import React, { useState, useEffect } from "react";
import { database } from "../firebase";
import "../css/RecipeContent.css";
import SingleRecipe from "./SingleRecipe";
import { Link } from "react-router-dom";

function RecipeContent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Zaktualizuj tytuł dokumentu korzystając z interfejsu API przeglądarki
    let ref = database.ref("/");
    ref.on("value", (snapshot) => {
      const dbdata = snapshot.val();
      setData(dbdata);
    });
  }, []);

  if (data) {
    console.log(data.value);
  }

  return (
    <div className="recipeContent">
      <hr />
      <div className="recipeContent__container">
        {data
          ? data.value.map((recipe) => (
              <Link
                to={`recipes/${recipe.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <SingleRecipe
                  key={recipe.id}
                  name={recipe.name}
                  calories={recipe.calories}
                  image={recipe.image}
                  fat={recipe.fat}
                  protein={recipe.protein}
                  carbs={recipe.carbs}
                  description={recipe.instructions}
                />
              </Link>
            ))
          : "Loading..."}
      </div>
    </div>
  );
}

export default RecipeContent;
