import React from 'react';
import NavBar from '../NavBar'; 
import { useEffect, useState } from "react";
import ReactDom from "react-dom";

function ErrorPage() {
   return (
 <>
  <NavBar />
   <h1>Oops! Looks like something went wrong.</h1>
 </>
  );
}

export default ErrorPage;