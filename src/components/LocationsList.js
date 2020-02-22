import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: blue;
  font-size: 25px;
`;
const LocList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
export default function LocationList(props) {
  console.log("LocList", props);
  return (
    <LocList>
      {props.locate.map((loc, index) => {
        return (
          <StyledLink key={index} to={`/locate/${loc.id}`}>
            {loc.name}
          </StyledLink>
        );
      })}
    </LocList>
  );
}
