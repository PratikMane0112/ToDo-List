

import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, { text: inputText, completed: false }];
    });
    setInputText("");
  }


  function toggleComplete(index) {
    setItems((prevItems) => {
      console.log(prevItems)
      const newItems = prevItems.map((item, i) => {
        if (i === index) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
      return newItems;
    });
  }
  function deleteItem(index) {
    setItems((prevItems) => {
      return prevItems.filter((item, i) => i !== index);
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            
            <li key={index}>
              <span className={todoItem.completed ? "completed" : ""}>
              {todoItem.text}
              </span>
              <span className="icons">
                <span className="tick" onClick={() => toggleComplete(index)}>✔</span>
                <span className="delete" onClick={() => deleteItem(index)}>✖</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
