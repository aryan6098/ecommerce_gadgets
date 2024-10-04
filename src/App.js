import { useEffect, useState } from "react";
import "./App.css";
import { Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import NotFound from "./components/NotFound";
import ProductShow from "./components/ProductShow";
import CartContextProvider from "./context/cart";
import store from "./store";
function App() {
  // const [selectedCategory, setSelectedCategory] = useState("electronics");

  // useEffect(()=>{

  // },[count])
  return (
    <div>
      <Provider store={store}>
        <CartContextProvider>
          <Routes>
            <Route
              path="/"
              default
              element={[
                <Header
                  // selectedCategory={selectedCategory}
                  // setSelectedCategory={setSelectedCategory}
                />,
                // <ProductList defaultSelectedCategory={selectedCategory} />,
                <ProductList />,
              ]}
            >

            <Route
              path="/categories/:category"
              element={
                // <ProductList defaultSelectedCategory={selectedCategory} />
                <ProductList />

              }
            />
            <Route path="/products/:productId" element={<ProductShow />} />

            <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </CartContextProvider>
      </Provider>
    </div>
  );
}

export default App;
