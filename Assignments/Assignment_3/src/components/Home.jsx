import ProductForm from "./ProductForm";

const Home = ({ setProducts }) => {
  return (
    <div>
      <ProductForm setProducts={setProducts} />
    </div>
  );
};

export default Home;