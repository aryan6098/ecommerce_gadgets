/**
 * fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))
 */
import { useParams } from "react-router-dom";
import useApi from "../hooks/useApi";
import AddToCart from "./AddToCart";
// import AddToCart from "./AddToCart";
const ProductShow = () => {
  const { productId } = useParams();
  const { data } = useApi(`https://fakestoreapi.com/products/${productId}`);

  return (
    <div className="product-show" key={data.id}>
      <img src={data.image} alt={data.title} className="image" />
      <div className="product-show-description">
        <div className="product-show-title">{data.title}</div>
        <div className="product-body product-show-body">
          <div className="product-show-price">$ {data.price}</div>
          <AddToCart product={data} />
        </div>
      </div>
    </div>
  );
};

export default ProductShow;
