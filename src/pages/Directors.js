import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactDom from "react-dom"
import MovieCard from "../components/MovieCard";
import Directors from '../pages/Directors';
import Actors from '../pages/Actors';
import Movie from '../pages/Movie';


const DirectorsDirectors = ({ directors }) => {
  return (
  <>
    <h1>Directors Page</h1>
  <main>
    {directors.map((director) => (
    <article key={director.id}>
  <h2>{director.name}</h2>
  <ul>
    {director.movies.map((movie) => (
    <li key={movie}>{movie}</li>
  ))}
  </ul>
  </article>
  ))}
  </main>
  </>
  );
  };
  
  export default Directors;