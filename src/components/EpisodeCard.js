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
export default function EpisodeCard(props) {

  const paramItemId = props.match.params.id;
  // console.log('paramter ID', paramItemId)

  const episode = props.episodes.find(item => {
    return item.id === Number(paramItemId);
  });
  // console.log('episodes', props.episodes)


  // console.log('CCprops', props.charData)
 
      return episode ? (
      <Card>
        <h1>Name:{episode.name}</h1>
        <p>Air Date: {episode.air_date}</p>
        <p>Episode #: {episode.episode}</p>
      </Card>
      ) : <p>404</p>
 
}
