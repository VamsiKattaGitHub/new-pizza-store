import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DeleteItem = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/items')
      .then(response => setItems(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/items/${id}`)
      .then(() => {
        setItems(items.filter(item => item.id !== id));
      })
      .catch(error => console.error('Error deleting item:', error));
  };

  return (
    <div>
      <h1>Delete Item</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteItem;
