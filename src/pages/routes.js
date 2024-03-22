import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactDom from "react-dom"
import MovieCard from "../components/MovieCard";
import Home from './Home';
import Directors from './Directors';
import Actors from './Actors';
import Movie from './Movie';

const routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/directors",
    component: Directors
  },
  {
    path: "/actors",
    component: Actors
  },
  {
    path: "/movie/:id",
    component: Movie
  }
];

export default routes;
