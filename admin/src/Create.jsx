import { useState } from 'react'
import './Create.css'

export default function Create() {
  const [pizza, setPizza] = useState({
    name: "",
    description: "",
    price: "",
    picture: "",
    isAvailable: true
  })

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target

    setPizza({
      ...pizza,
      [name]: type === "checkbox" ? checked : value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!pizza.name.trim()) {
      alert("Pizza name is required")
      return
    }

    if (!pizza.description.trim()) {
      alert("Description is required")
      return
    }

    if (pizza.price <= 0) {
      alert("Price must be greater than 0")
      return
    }

    console.log("Pizza created:", pizza)

    alert("Pizza successfully created!")

    setPizza({
      name: "",
      description: "",
      price: "",
      picture: "",
      isAvailable: true
    })
  }

  return (
    <div>
      <h2>Create Pizza</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Pizza Name:</label>
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
            maxLength="200"
          />
        </div>

        <p>
          Characters: {pizza.description.length}/200
        </p>

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

        <div>
          <label htmlFor="picture">Picture URL:</label>
          <input
            type="text"
            id="picture"
            name="picture"
            value={pizza.picture}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="available">Available</label>
          <input
            type="checkbox"
            id="available"
            name="isAvailable"
            checked={pizza.isAvailable}
            onChange={handleChange}
          />
        </div>

        {pizza.picture && (
          <div>
            <h3>Image Preview</h3>

            <img
              src={pizza.picture}
              alt="Pizza preview"
              width="250"
            />
          </div>
        )}

        <h3>Pizza Preview</h3>

        <table border="1">
          <tbody>
            <tr>
              <td>Name</td>
              <td>{pizza.name}</td>
            </tr>

            <tr>
              <td>Description</td>
              <td>{pizza.description}</td>
            </tr>

            <tr>
              <td>Price</td>
              <td>{pizza.price}</td>
            </tr>

            <tr>
              <td>Available</td>
              <td>{pizza.isAvailable ? "Yes" : "No"}</td>
            </tr>
          </tbody>
        </table>

        <br />

        <button type="submit">Create Pizza</button>
      </form>
    </div>
  )
}