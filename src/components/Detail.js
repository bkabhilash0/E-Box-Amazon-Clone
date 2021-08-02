import React from "react";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import classes from "./Detail.module.css";

const Detail = (props) => {
  const id = props.match.params.id;
  const products = useSelector((state) => state);

  const product = products.allProducts.find((item) => item.id === +id);

  if (!product) {
    return <Loader />;
  }

  return (
    <section>
      <div className={classes.image}>
        <img src={product.image} alt="" width="100%" />
      </div>
      <div className={classes.content}>
        <h1>{product.name}</h1>
        <h3>&#8377;{product.price}</h3>
      </div>
    </section>
  );
};

export default Detail;
