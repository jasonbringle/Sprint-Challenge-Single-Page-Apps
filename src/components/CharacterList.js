import React from "react";
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
display: flex;
flex-direction: column;
text-decoration:none;
color: blue;
font-size: 25px;
`
const CharList = styled.div`
display: flex;
flex-direction: column;
align-items:center;
padding:20px;

`
export default function CharacterList(props) {
  console.log('props char', props.chars)
  return (
    <CharList>
      {props.chars.map((char,index) =>{
        return (<StyledLink key={index} to={`/characterList/${char.id}`}>{char.name}</StyledLink>)
      })}  
    </CharList>
  );
}
