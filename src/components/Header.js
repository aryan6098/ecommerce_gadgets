import { useEffect, useState } from "react";
import useApi from "../hooks/useApi";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../context/cart";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory } from "../store/header";
const Header = () => {
  const cart = useSelector((state) => state.cart);
  const { selectedCategory, defaultValue }  = useSelector(state => state.header);

  const dispatch = useDispatch();
  // const {cart} = useCartContext();
  // const [data, setData] = useState([]);

  // useEffect(() => {
  // setLoading(true)
  //   fetch("https://fakestoreapi.com/products/categories")
  //     .then((res) => res.json())
  //     .then((json) => setData(json));
  // }, []);
  // const { category } = useParams();
  const value = useParams();
  const { data, loading, loadError } = useApi(
    "https://fakestoreapi.com/products/categories"
  );
  const selectedCategoryVal = selectedCategory || defaultValue;
  useEffect(() => {
    if (data.length > 0) {
      dispatch(setSelectedCategory(selectedCategoryVal));
    }
  }, [data, setSelectedCategory]);
  const totalItem = () => {
    let total = 0;
    for (let obj in cart) {
      total += cart[obj].quantity;
    }
    return total;
  };
  if (loading) return <div>Fetching Categories</div>;
  else if (loadError) return <div>Oops...Please try again </div>;
  else
    return (
      <div className="header-items">
        {data.map((category) => (
          <Link
            to={`categories/${category}`}
            key={category}
            className={
              "header-item " +
              (category === selectedCategoryVal ? "header-item-selected" : "")
            }
            onClick={() =>setSelectedCategory(category)}
          >
            {category}
          </Link>
        ))}
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="cart-length">{totalItem()}</span>
      </div>
    );
};

export default Header;
