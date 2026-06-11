import { useState } from 'react'
import './Create.css'

import { useState } from 'react';

export default function Create() { //maybe use this as template
  // 1. Initialize state for the form fields
  const [pizza, setPizza] = useState({
    name: "",
    description: "",
    price: "",
    picture: "",
    isAvailable: true
  });

  // 2. Handle input changes dynamically
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setPizza({
      ...pizza,
      [name]: type === "checkbox" ? checked : value
    });
  };

  // 3. Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the browser from reloading the page
    console.log("Pizza created:", pizza);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Pizza</h2>
      <div>
        <label htmlFor="name">PizzaName:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={pizza.name}
          onChange={handleChange}
        />
     </div>

      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={pizza.description}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={pizza.price}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Add Pizza</button>
    </form>
  );
}