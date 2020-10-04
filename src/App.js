import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { RecipeContextProvider } from "./context/RecipeContext";
import RecipeContent from "./components/RecipeContent";

function App() {
  return (
    <div className="App">
      <RecipeContextProvider>
        <Navbar />
        <Hero />
        <RecipeContent />
      </RecipeContextProvider>
    </div>
  );
}

export default App;
