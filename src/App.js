import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { RecipeContextProvider } from "./context/RecipeContext";
import RecipeContent from "./components/RecipeContent";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RecipeInfo from "./components/RecipeInfo";
import Favourites from "./components/Favourites";

function App() {
  return (
    <div className="App">
      <Router>
        <RecipeContextProvider>
          <Navbar />
          <Route exact path="/">
            <Hero />
            <RecipeContent />
          </Route>
          <Route path="/recipes/:id">
            <RecipeInfo />
          </Route>
          <Route path="/favourites">
            <Favourites />
          </Route>
        </RecipeContextProvider>
      </Router>
    </div>
  );
}

export default App;
