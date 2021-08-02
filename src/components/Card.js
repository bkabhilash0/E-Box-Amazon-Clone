import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const StyledCard = styled.div`
  width: 25rem;
  padding: 1rem;
  text-align: center;
  background-color: #ddd;
  cursor: pointer;
  transition: all 0.2s;
  border-radius: 2rem;

  &:hover {
    background-color: #aaa;
  }

  div {
    width: 100%;
    height: 70%;
    margin-bottom: 1rem;
    border-radius: 2rem;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  h2 {
    font-size: 2.5rem;
  }

  h4 {
    font-size: 2rem;
  }
`;

const Card = (props) => {
  const history = useHistory();

  const clickHandler = () => {
    history.push(`/product/${props.id}`);
  };

  return (
    <StyledCard onClick={clickHandler}>
      <div>
        <img src={props.image} alt="Card 1" />
      </div>
      <h2>{props.name}</h2>
      <h4>&#8377;{props.price}</h4>
    </StyledCard>
  );
};

export default Card;
