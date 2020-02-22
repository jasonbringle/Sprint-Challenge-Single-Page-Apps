import React, { useState, useEffect } from "react";
import styled from "styled-components";

const App = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
`;

export default function SearchForm(props) {
  const characters = props.chars.map(player => {
    return player.name;
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(characters);

  useEffect(() => {
    const results = characters.filter(character => {
      return character.toLowerCase().includes(searchTerm.toLowerCase());
    },[characters]);

    setSearchResults(results);
  }, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <App>
      <form>
        <label htmlFor="name">Search:</label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
      <div className="character-list">
        <ul>
          {searchResults.map(character => {
            return <li key={character}>{character}</li>;
          })}
        </ul>
      </div>
    </App>
  );
}
