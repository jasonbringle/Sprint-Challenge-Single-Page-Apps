import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'

const Links = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
const LinkButton = styled(Link)`
  text-decoration: none;
  color: black;
`;
const HeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 3px solid black;
`;

export default function Header() {
  return (
    <HeaderStyle className="ui centered">
      <header>
        <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      </header>

      <Links>
        <LinkButton to="/">HOME!</LinkButton>
        <LinkButton to="/characterlist">CAST!</LinkButton>
        {/* <LinkButton to="/locate">PLACES!</LinkButton>
        <LinkButton to="/episodes">EPISODES!</LinkButton>
        <LinkButton to="/search">SEARCH!</LinkButton> */}
      </Links>
    </HeaderStyle>
  );
}
