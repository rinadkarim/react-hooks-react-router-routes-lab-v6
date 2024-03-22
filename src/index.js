import "./index.css";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { useEffect, useState } from "react";
import React from "react";
import MovieCard from "./components/MovieCard";
import Directors from './pages/Directors';
import Actors from './pages/Actors';
import Movie from './pages/Movie';
import routes from './pages/routes';



const BrowserRouter = createBrowserRouter();
const rootElement = document.getElementById("root");

 ReactDOM.render(
<React.StrictMode>
<BrowserRouter>
<RouterProvider routes={routes}>
</RouterProvider>
</BrowserRouter>
</React.StrictMode>,
  rootElement
);

