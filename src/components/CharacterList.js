import React, {  useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

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
export default function CharacterList() {

  const [chars, setChar] = useState([]);


  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        setChar(response.data.results);
      })
      .catch(error => {
        console.log("error", error);
      });
  }, []);

  return (
    <CharList>
      {chars.map((char,index) =>{
        return (<StyledLink key={index} to={`/characterList/${char.id}`}>{char.name}</StyledLink>)
      })}  
    </CharList>
  );
}
