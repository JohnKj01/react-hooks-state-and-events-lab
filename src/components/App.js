import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDarkMode,setisDarkMode]=useState(false)
  const  handleDarkMode=(e)=>{
    setisDarkMode (isDarkMode=>!isDarkMode)
  }
  const appClass = isDarkMode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkMode}> {isDarkMode? "Light Mode" : "Dark Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
