import React, { useState } from "react";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem.trim() !== "") {
      setItems((prevItems) => [...prevItems, newItem]);
      setNewItem("");
    }
  };

  const handleInputChange = (event) => {
    setNewItem(event.target.value);
  };

  return (
    <div>
      <h2>Lista de Itens:</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <input type="text" value={newItem} onChange={handleInputChange} />
      <button onClick={addItem}>Adicionar Item</button>
    </div>
  );
};

export default ItemList;
