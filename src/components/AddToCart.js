import { useDispatch, useSelector } from "react-redux";
import { useCartContext } from "../context/cart";
import { addToCartRedux, removeFromCartRedux } from "../store/cart";

const AddToCart = ({ product }) => {
  // const { cart, addToCart, subtractFromCart } = useCartContext();
// const {cart,addToCart, removeCart} = useCartContext();
  const cart  = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const handleAdd = (event) => {
    event.stopPropagation()
    dispatch(addToCartRedux(product));
    // addToCart(product);
  };

  const handleSubtract = (event) => {
    event.stopPropagation()
    dispatch(removeFromCartRedux(product));
    // removeCart(product)
  };


  const productInCart = cart[product.id];
  if (!productInCart)
    return (
      <div onClick={handleAdd} className="add-to-cart">
        Add To Cart
      </div>
    );
  else {
    return (
      <div className="add-to-cart-container">
        <div onClick={handleSubtract} className="add">
          -
        </div>
        <div className="quantity">{productInCart.quantity}</div>
        <div onClick={handleAdd} className="add">
          +
        </div>
      </div>
    );
  }
};

export default AddToCart;
