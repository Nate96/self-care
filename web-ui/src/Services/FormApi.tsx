import {Assessment, Category, Question, DBQuestions, BasicAnalyse, Categories, FormResponse } from './../lib/types'
import Config from '../config'

async function getCategories(): Promise<Category[]> {
    try {
       let categories: Category[] = []
       let res = await fetch(Config.getCategories)
       let cats = await res.json()

       res = await fetch(Config.getQuestions)
       let ques = await res.json()
       console.log('quesions', ques)

       for (const c of cats){
          let category: Category = {
             CategoryId: c.id,
             Category:   c.category,
             Questions:  [],
             CreateDt:   c.create_dt,
             UpdatedDt:  c.updated_dt} 

          for (const q of ques) {
             if (q.category_id == c.id) {
                let qu: Question = {
                   QuestionId: q.id,
                   Question:   q.question,
                   CategoryId: q.CategoryId, 
                   CreateDt:   q.CreateDt,
                   UpdatedDt:  q.UpdatedDt,
                   Answer:     0,
                   Improve:    false}

                category.Questions.push(qu)
             }
          }
         categories.push(category)
       }

       console.log('cats', categories)
      return categories
    }
    catch(error){
      console.log(error)
      return []
    }
}

async function getAssessments(): Promise<Assessment[]> {
    let body
    try {
      let response = await fetch(Config.assessments)
      body = await response.json()
  
      return body
    }
    catch(error){
      console.log(error)
    }
  
    return body
}


async function addAssessment(assessment: Assessment): Promise<string> { 
   try {
      await fetch(Config.assessments, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(assessment)

      })
      return `Added ${assessment.id}`
   }
   catch(error) {
      return `Faild to inset ${assessment.id}`

   }
}

async function getBasicAnalyse(userId: number): Promise<BasicAnalyse[]> {
    let body
    try {
        let response = await fetch(Config.getAnalysis)
        body = await response.json()
        
        return body
    }
    catch(error){
        console.log(error)
    }
    
    return body        

}

async function createBasicCalculations(formId: number): Promise<string> {
  let body
  const requestOptions = {method: 'POST'}
  try {
    const resposne = await fetch(Config.createBasicCalulation + formId, requestOptions)
    const body = await resposne.json()

    return body
  }
  catch(error) {
    console.log(error)
  }

  return "faild"
}

export default {
  getCategories, 
  getBasicAnalyse,
  createBasicCalculations,
  addAssessment,
  getAssessments
}
