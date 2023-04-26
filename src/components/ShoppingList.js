import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState();
  const handleCategory = (e) => {
    setSelectedCategory(e.target.value)};
  let filteredItems = items.filter((items) =>{
    if (selectedCategory==="All") return true
    return  items.category === selectedCategory}
      );

  return (
    <div className="ShoppingList">
      <div onChange={handleCategory} className="Filter">
        <select name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  )};


export default ShoppingList;
