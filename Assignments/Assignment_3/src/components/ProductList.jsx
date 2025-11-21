// src/components/ProductList.jsx
import ProductCard from "./ProductCard";
import "../styles/productCard.css";

const ProductList = ({ products = [], setProducts }) => {
  const handleDelete = (id) => {
    // use functional update to avoid stale closures
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  return (
    <div className="product-list-container">
      <h2 className="heading">All Products</h2>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;