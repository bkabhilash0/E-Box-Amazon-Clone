import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import query from "query-string";
import styled from "styled-components";

const Phones = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`;

const Search = (props) => {
  const { q: search } = query.parse(props.location.search);

  const { allProducts } = useSelector((state) => state);
  // eslint-disable-next-line no-unused-vars
  const [products, _setProducts] = useState(allProducts);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (search.trim().length !== 0) {
      setFilteredProducts(
        products.filter((product) => product.name.includes(search))
      );
    } else {
      setFilteredProducts([]);
    }
  }, [products, search]);

  return (
    <Phones>
      {filteredProducts.map((product) => (
        <Card key={product.id} {...product} />
      ))}
    </Phones>
  );
};

export default Search;
