import React, { useState,useEffect } from "react";
import Header from "./components/Header.js";
import axios from 'axios'
import WelcomePage from './components/WelcomePage'
import { Route } from "react-router-dom";


export default function App() {

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
console.log('chars', chars)
  return (
    <main>
      <Header />
      <Route exact path='/' component={WelcomePage}/>
    </main>
  );
}
