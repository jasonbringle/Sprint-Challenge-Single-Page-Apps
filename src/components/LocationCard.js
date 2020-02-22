import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  height: auto;
  box-shadow: 10px 10px 80px 10px black;
  margin-top: 3rem;
`;

export default function LocationCard(props) {
  const paramItemId = props.match.params.id;
  // console.log('paramter ID', paramItemId)

  const location = props.locate.find(item => {
    return item.id === Number(paramItemId);
  });
  console.log("character", props.locate);

  // console.log('CCprops', props.charData)

  return location ? (
    <Card>
      <h1>Name:{location.name}</h1>
      <p>Type: {location.type}</p>
      <p>Dimension: {location.dimension}</p>
    </Card>
  ) : (
    <p>404</p>
  );
}
