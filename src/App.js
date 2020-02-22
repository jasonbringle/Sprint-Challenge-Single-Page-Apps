import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import CharacterCard from "./components/CharacterCard";
import { Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage.js";
import axios from "axios";
import SearchForm from "./components/SearchForm.js";
import LocationsList from "./components/LocationsList";
import LocationCard from "./components/LocationCard";
import EpisodeList from "./components/EpisodeList";
import EpisodeCard from "./components/EpisodeCard";

export default function App() {
  const [chars, setChar] = useState([]);
  const [locate, setLocate] = useState([]);
  const [episodes, setEpisodes] = useState([]);

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

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/`)
      .then(response => {
        setLocate(response.data.results);
      })
      .catch(error => {
        console.log("error", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/`)
      .then(response => {
        setEpisodes(response.data.results);
      })
      .catch(error => {
        console.log("error", error);
      });
  }, []);
  // console.log("episodes", episodes);

  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route
        path="/characterlist/:id"
        render={routeProps => {
          return <CharacterCard {...routeProps} charData={chars} />;
        }}
      />
      <Route
        path="/characterlist"
        render={() => {
          return <CharacterList chars={chars} />;
        }}
      />
      <Route
        path="/search"
        render={() => {
          return <SearchForm chars={chars} />;
        }}
      />
      <Route
        path="/locate/:id"
        render={routeProps => {
          return <LocationCard {...routeProps} locate={locate} />;
        }}
      />
      <Route
        path="/locate"
        render={() => {
          return <LocationsList locate={locate} />;
        }}
      />

      <Route
        path="/episodes/:id"
        render={routeProps => {
          return <EpisodeCard {...routeProps} episodes={episodes} />;
        }}
      />
      <Route
        path="/episodes"
        render={() => {
          return <EpisodeList episodes={episodes} />;
        }}
      />
    </main>
  );
}
