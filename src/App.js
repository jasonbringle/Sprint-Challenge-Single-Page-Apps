import React from "react";
import Header from "./components/Header.js";
// import axios from 'axios'
import WelcomePage from './components/WelcomePage'
import { Route } from "react-router-dom";
// import CharacterCard from './components/CharacterCard'
import CharacterList from './components/CharacterList'


export default function App() {

  
  return (
    <main>
      <Header />
      <Route exact path='/' component={WelcomePage}/>
      
      <Route
        path="/characterlist" component={CharacterList}
      />
    </main>
  );
}
