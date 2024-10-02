import { Link, useNavigate } from "react-router-dom";
import AddToCart from "./AddToCart";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/products/${product.id}`);
  };
  return (
    <div onClick={handleClick} className="product" key={product.id}>
      <img src={product.image} alt={product.title} className="image" />
      <div>
        <div className="product-title">{product.title}</div>
        <div className="product-body">
          <span>$ {product.price}</span>
          <AddToCart product={product} />
        </div>
      </div>
    </div>
  );
};

export default Product;
