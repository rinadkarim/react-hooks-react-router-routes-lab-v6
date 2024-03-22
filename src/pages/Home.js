import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactDom from "react-dom"
import MovieCard from "../components/MovieCard";
import Directors from '../pages/Directors';
import Actors from '../pages/Actors';
import Movie from '../pages/Movie';




function Home({ movies }) {
 
  return (
  <>
  <header>
   <h1>Home Page</h1>
  </header>
  <main>
  <ul>
   {movies.map((movie) => (
   <li key={movie.id}>
   <MovieCard movie={movie} />
   </li>
  ))}
  </ul>
  </main>
  </>
    );
  }
  
  export default Home;
