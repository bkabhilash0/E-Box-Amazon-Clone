import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loading, success } from "./store/actions/productsActions";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Products from "./components/Products";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Detail from "./components/Detail";
import PageNotFound from "./components/404";
import Search from "./components/Search";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  useEffect(() => {
    dispatch(loading());
    fetch("http://localhost:5050/products")
      .then((response) => response.json())
      .then((products) => {
        dispatch(success(products));
      })
      .catch((error) => console.error(error));
  }, [dispatch]);

  let components = <Loader />;
  if (!data.loading) {
    components = (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route path="/product/:id" component={Detail} />
          <Route path="/cart" component={Cart} />
          <Route path="/search" component={Search} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </>
    );
  }

  return <Router>{components}</Router>;
}

export default App;
