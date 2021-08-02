import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Card from "./Card";

const ProductsSection = styled.section`
  padding: 7rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }
`;

const Products = () => {
  const products = useSelector((state) => state);

  return (
    <ProductsSection>
      <div className="main">
        {products.allProducts.map((product) => (
          <Card {...product} key={product.id} />
        ))}
      </div>
    </ProductsSection>
  );
};

export default Products;
