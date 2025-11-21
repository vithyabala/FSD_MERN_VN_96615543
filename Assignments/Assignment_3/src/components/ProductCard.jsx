// src/components/ProductCard.jsx
import { Link } from "react-router-dom";
import "../styles/productCard.css";

const ProductCard = ({ product, onDelete }) => {
  const handleDeleteClick = (e) => {
    // prevent Link navigation and stop event bubbling
    e.preventDefault();
    e.stopPropagation();

    if (typeof onDelete === "function") {
      onDelete(product.id);
    }
  };

  return (
    <div className="card-wrapper">
      <Link to={`/product/${product.id}`} state={product} className="card-link">
        <div className="product-card">
          <img src={product.image} alt={product.title} className="card-img" />
          <h3>{product.title}</h3>
          <p>₹ {product.price}</p>
        </div>
      </Link>

      {/* Place delete button outside or inside. If inside Link keep preventDefault above */}
      <button className="delete-btn" onClick={handleDeleteClick}>
        Delete
      </button>
    </div>
  );
};

export default ProductCard;