import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactDom from "react-dom"
import MovieCard from "../components/MovieCard";
import Directors from '../pages/Directors';
import Actors from '../pages/Actors';
import Movie from '../pages/Movie';

function MovieCardCard({ movie }) {
const { id, title } = movie;
return (
<article>
 <h2>{title}</h2>
 <Link to={`/movie/${id}`}>View Details</Link>
</article>
  );
}

export default MovieCard;