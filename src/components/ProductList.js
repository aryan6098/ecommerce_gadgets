import { useEffect, useState } from "react";
import Product from "./Product";
import useApi from "../hooks/useApi";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadProduct } from "../store/productList";
import { setSelectedCategory } from "../store/header";
const ProductList = () => {
  const { category } = useParams();
  const {defaultValue}  = useSelector(state => state.header);
  const categoryVal = category || defaultValue;
  const value = useSelector((state) => state.productList)
  const dispatch = useDispatch();

  useEffect(()=>{
    // if(selectedCategory) {
      dispatch(loadProduct(categoryVal))
      dispatch(setSelectedCategory(categoryVal))
    // }
  },[categoryVal, dispatch])

  const { data, loading, loadError } = useSelector((state) => state.productList)
  // const { data, loading, loadError } = useApi(
  //   `https://fakestoreapi.com/products/category/${category}`
  // );

  //   const [products, setProducts] = useState([]);
  //   const [loading, setLoading] = useState(false);
  //   useEffect(() => {
  //     setLoading(true);
  //     fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
  //       .then((res) => res.json())
  //       .then((json) => {
  //         setProducts(json);
  //         setLoading(false);
  //       });
  //   }, [selectedCategory]);

  if (loading) return <div className="loading">Fetching products... </div>;
  else if (loadError) return <div>Oops..Please try again</div>;
  else
    return (
      <div className="products">
        {data.map((product) => (
          <Product product={product} key={product.id}  />
        ))}
      </div>
    );
};

export default ProductList;

// fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
