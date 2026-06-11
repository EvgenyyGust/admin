import { useState } from 'react';
import './Update.css';

export default function Update() {
  const [pizza, setPizza] = useState({
    name: "",
    description: "",
    price: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPizza(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(pizza);
  };

  return (
    <div className="update-form-container">
      <h2>Update Pizza Details</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Pizza Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={pizza.name}
            onChange={handleChange}
            placeholder="Enter pizza name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={pizza.description}
            onChange={handleChange}
            placeholder="Enter ingredients or description"
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price ($):</label>
          <input
            type="number"
            id="price"
            name="price"
            value={pizza.price}
            onChange={handleChange}
            placeholder="0.00"
          />
        </div>

        <button type="submit">Update Pizza</button>
      </form>
    </div>
  );
}