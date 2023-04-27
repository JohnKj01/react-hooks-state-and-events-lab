import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState();
  const [cartItems, setCartItems] = useState([]);

  const handleCategory = (e) => {
    setSelectedCategory(e.target.value);
  };

  const manageCartItem = (itemKey) => {
    if (!cartItems.includes(itemKey)) {
      setCartItems([...cartItems, itemKey]);
    } else {
      const newItems = cartItems.filter((item) => item !== itemKey);
      setCartItems(newItems);
    }
  };

  let filteredItems = items.filter((items) => {
    if (selectedCategory === "All") return items.category;
    else {
      return items.category === selectedCategory;
    }
  });

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
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            category={item.category}
            cartItems={cartItems}
            manageCartItem={manageCartItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
