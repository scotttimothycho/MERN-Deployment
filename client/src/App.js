import React from 'react';

import { Link, Redirect, Router } from "@reach/router";

import './App.css';
import NotFound from "./views/NotFound";
import Pets from "./views/Pets";
import Pet from "./views/Pet";
import NewPet from "./views/NewPet";
import EditPet from "./views/EditPet";

function App() {
  return (
    <div className="App">
      <div>
        <Link to="/exam">All Pets</Link>
        <Link to="/exam/new">New Pet</Link>
      </div>
      <Router>
        <Redirect noThrow="true" from="/" to="/exam"></Redirect>
        <NotFound default />
        <Pets path="/exam" />
        <Pet path="/exam/:id" />
        <NewPet path="/exam/new" />
        <EditPet path="/exam/:id/edit" />

      </Router>
    </div>
  );
}

export default App;
