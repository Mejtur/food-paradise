import React, { useState, useEffect, useContext } from "react";
import "../css/Favourites.css";
import { database, auth } from "../firebase";
import { RecipeContext } from "../context/RecipeContext";
import SingleRecipe from "./SingleRecipe";
import { Link } from "firebase";

function Favourites() {
  const [data, setData] = useState(null);
  const [uid, setUid] = useState(null);
  const { user } = useContext(RecipeContext);

  auth.onAuthStateChanged((user) => {
    if (user) {
      setUid(user.uid);
    } else {
    }
  });

  useEffect(() => {
    if (uid) {
      let ref = database.ref(`${uid}/favourites`);
      ref.on("value", (snapshot) => {
        const dbdata = snapshot.val();
        setData(dbdata);
      });
    }
  }, [uid]);

  console.log(data);

  return (
    <div className="favourites">
      <div className="favourities__title">
        <h1>My favourities: {user}</h1>
      </div>
      <div className="favourities__content">
        <hr />
        {/* {data
          ? data.map((recipe) => (
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
          : "Loading..."} */}
      </div>
    </div>
  );
}

export default Favourites;
