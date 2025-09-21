import React, { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { Category, Form, Question } from "../lib/types";
import './../css/Layout.css';
import Config from "../config"

const Layout = () => {
  useEffect(() => { }, [])

  return (
    <>
      <div className="Layout">
        <Link to="/" className="item">new</Link>

        <Link 
          to="/stats" 
          className="item"
        >
            Stats
        </Link>
      </div>

      <Outlet />
    </>
  )
};

async function getCategories(): Promise<Category[]> {
  let body
  try {
    let response = await fetch(Config.getCategories)
    body = await response.json()
    
    return body
    
  }
  catch(error){
    console.log(error)
  }
  
  return body
}


async function getQuestions(): Promise<Question[]> {
  let body
  try {
    let response = await fetch(Config.getQuestions)
    body = await response.json()
    
    return body
  }
  catch(error){
    console.log(error)
  }

  return body
}

export default Layout
