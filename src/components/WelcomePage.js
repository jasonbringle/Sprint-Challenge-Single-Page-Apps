import React from "react";
import styled from "styled-components";

const Image = styled.img`
  margin-top: 3rem;
  width: 100%;
  box-shadow: 10px 10px 80px 10px black;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <Image
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
  );
}
