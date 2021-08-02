import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

const StyledHeader = styled.header`
  background: #232f3e;

  nav {
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 18rem;
    }

    div {
      flex-basis: 50%;
      text-align: center;
    }

    input {
      padding: 1rem 2rem;
      font-size: 2rem;
      flex-basis: 80%;
      width: 75%;
      outline: none;
      border: none;
      border-radius: 1rem;
      transition: all 0.3s;

      &:focus {
        width: 100%;
      }
    }

    h2 {
      font-size: 3rem;
      color: white;
      cursor: pointer;
    }
  }
`;

const Header = (props) => {
  const history = useHistory();
  const [search, setSearch] = useState("");
  return (
    <StyledHeader>
      <nav>
        <Link to="/">
          <img
            src="https://www.pngfind.com/pngs/m/56-565024_amazon-logo-png-amazon-png-transparent-png.png"
            alt="Logo"
          />
        </Link>
        <div>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => {
              setSearch(() => e.target.value);
              history.push(`/search?q=${e.target.value}`);
            }}
            onFocus={() => history.push(`/search?q=${search}`)}
            onBlur={() => history.push("/")}
          />
        </div>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <h2>Cart</h2>
        </Link>
      </nav>
    </StyledHeader>
  );
};

export default Header;
