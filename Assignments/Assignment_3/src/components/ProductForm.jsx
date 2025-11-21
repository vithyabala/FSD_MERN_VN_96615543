import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/productForm.css";

const ProductForm = ({ setProducts }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? URL.createObjectURL(files[0]) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setProducts((prev) => [...prev, { id: Date.now(), ...formData }]);

    navigate("/products"); // redirect
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Add New Product</h2>

      <form onSubmit={handleSubmit} className="form-box">
        <label>Product Title</label>
        <input
          name="title"
          placeholder="Product Name"
          onChange={handleChange}
          required
        />

        <label>Price</label>
        <input
          name="price"
          type="number"
          placeholder="Enter Price"
          onChange={handleChange}
          required
        />

        <label>Description</label>
        <textarea
          name="description"
          placeholder="Enter Description"
          onChange={handleChange}
          required
        />

        <label>Category</label>
        <input
          name="category"
          placeholder="Category (Traditional, Bridal, Kids...)"
          onChange={handleChange}
          required
        />

        <label>Upload Image</label>
        <input
          name="image"
          type="file"
          accept="image/*"
          onChange={handleChange}
        />

        <button type="submit" className="submit-btn">
          Create Product
        </button>
      </form>

      <button className="back-btn" onClick={() => navigate("/products")}>
        ⬅ Back to Products
      </button>
    </div>
  );
};

export default ProductForm;