import React, { useState, useEffect } from "react";
import { database } from "../firebase";
import "../css/RecipeContent.css";
import SingleRecipe from "./SingleRecipe";

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
  console.log(data);

  return (
    <div className="recipeContent">
      <hr />
      <div className="recipeContent__container">
        {data
          ? data.value.map((recipe) => (
              <SingleRecipe
                key={recipe.id}
                name={recipe.name}
                calories={recipe.calories}
                image={recipe.image}
                ingredients={recipe.ingredients}
                fat={recipe.fat}
                protein={recipe.protein}
                carbs={recipe.carbs}
                description={recipe.instructions}
              />
            ))
          : "Loading..."}
      </div>
    </div>
  );
}

export default RecipeContent;
