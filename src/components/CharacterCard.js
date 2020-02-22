import React from "react";
import styled from 'styled-components'

const Card = styled.div`
display:flex;
flex-direction:column;
align-items:center;
padding: 10px;
height: auto;
box-shadow: 10px 10px 80px 10px black;
margin-top: 3rem;
`
const Image = styled.img`
height: auto;
width: 100px;
`
export default function CharacterCard(props) {
  console.log('CCprops', props)

  const paramItemId = props.match.params.id;
  // console.log('paramter ID', paramItemId)

  const character = props.chars.find(item => {
    return item.id === Number(paramItemId);
  });
  console.log('character', character)


 
      return character ? (
      <Card>
        <h1>Name:{character.name}</h1>
        <Image alt='character' src={character.image}/>
        <p>Currently: {character.status}</p>
        <p>Species: {character.species}</p>
        <p>Location: {character.location.name}</p>
      </Card>
      ) : <p>404</p>
 
}
