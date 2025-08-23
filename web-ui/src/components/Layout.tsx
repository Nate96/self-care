import React, { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { Category, Form, Question } from "../lib/types";
import './../css/Layout.css';
import Config from "../config"

const Layout = () => {
  const [assessment, setAssessment] = React.useState<Form>()
  useEffect(() => { generateBlankAssessment() }, [])

  async function generateBlankAssessment()  {
    const categories: Category[] = await getCategories()
    const questions: Question[] = await getQuestions()

    categories.forEach(category => {
      category.Questions = []
      const catigoryQuestions = questions.filter(question => question.CategoryId === category.CategoryId)
      if(catigoryQuestions)
        category.Questions = catigoryQuestions
    })
    const newForm: Form = {FormId: -1, UserId: 0, Categories: categories, CreatedDt: new Date(), UpdateDt: new Date()}
    setAssessment(newForm)
  }
  

  return (
    <>
      <div className="Layout">
        <Link to="/" className="item">Home</Link>
        <Link 
          to="/new-assessment" 
          className="item"
          state={{ details: assessment}}
        >
            New Assessment
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