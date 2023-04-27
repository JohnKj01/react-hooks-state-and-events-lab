import React from "react";

function Item({ id, name, category, cartItems, manageCartItem }) {

  let liClass = "";
  let btnClass = "add";
  let btnWording = "Add to Cart";

  if (cartItems.includes(id)) {
    liClass = "in-cart";
    btnClass = "remove";
    btnWording = "Remove from Cart";
  }

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={btnClass} onClick={() => manageCartItem(id)}>
        {btnWording}
      </button>
    </li>
  );
}

export default Item;
