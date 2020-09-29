import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Find from "./components/Find";
import { RecipeContextProvider } from "./context/RecipeContext";

function App() {
  return (
    <div className="App">
      <RecipeContextProvider>
        <Navbar />
        <Hero />
      </RecipeContextProvider>
    </div>
  );
}

export default App;
