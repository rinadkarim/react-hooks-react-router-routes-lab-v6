import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import ReactDom from "react-dom"
import MovieCard from "../components/MovieCard";
import Directors from '../pages/Directors';
import Actors from '../pages/Actors';
import Movie from '../pages/Movie';


function MovieMovie({ movies }) {
  const { id } = useParams();
  const movie = movies.find(movie => movie.id.toString() === id);
 
 return (
 <>
  <header>
    <h1>Movie Details</h1>
   </header>
   <main>
   {movie ? (
   <>
   <h1>{movie.title}</h1>
   <p>Time: {movie.time} minutes</p>
   <div>
      Genres:
      {movie.genres.map((genre, index) => (
      <span key={index}>{genre}</span>
 ))}
   </div>
   </>
   ) : (
 <p>Movie not found!</p>
 )}
  </main>
  </>
   );
 }
 
 export default MovieMovie;