import { useLocation, useNavigate } from "react-router-dom";
import "../styles/productDetails.css";

const ProductDetails = () => {
  const { state: product } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="details-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>

      <img src={product.image} className="details-img" />

      <h2>{product.title}</h2>
      <p className="price">₹ {product.price}</p>
      <p>{product.description}</p>
      <p><b>Category:</b> {product.category}</p>

      <button className="buy-btn">Buy Now</button>
    </div>
  );
};

export default ProductDetails;