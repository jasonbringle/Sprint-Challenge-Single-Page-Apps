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
const EpiList = styled.div`
display: flex;
flex-direction: column;
align-items:flex-start;
padding:20px;

`
export default function EpisodeList(props) {
  // console.log('props episodes', props.episodes)
  return (
    <EpiList>
      {props.episodes.map((epi,index) =>{
        return (<StyledLink key={index} to={`/episodes/${epi.id}`}>{epi.name}</StyledLink>)
      })}  
    </EpiList>
  );
}
