import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactDom from "react-dom"
import MovieCard from "../components/MovieCard";
import Directors from '../pages/Directors';
import Actors from '../pages/Actors';
import Movie from '../pages/Movie';

const ActorsActors = ({ actors }) => {

return (
<>
  <header>
    <h1>Actors Page</h1>
  </header>
  <main>
   {actors.map((actor) => (
   <article key={actor.id}>
    <h2>{actor.name}</h2>
    <ul>
      {actor.movies.map((movie) => (
      <li key={movie}>{movie}</li>
  ))}
</ul>
  </article>
  ))}
</main>
</>
);
};

export default Actors;
