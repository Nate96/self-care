import {Assessment, Category, Question, Response } from "../lib/types"

function buildAssessment(categories: Category[], responses: Response[]): Assessment {
  let assesementCategories: Category[] = []

  console.log('builder/cat:', assesementCategories)
  console.log('builder/res:', responses)
  
  categories.forEach(c => {
    let categoryQuestions: Response[] = responses.filter(a => a.CategoryId === c.CategoryId)!
    let questions: Question[] = []
    
    categoryQuestions.forEach(q => {

      let question: Question = {
        QuestionId: q.QuestionId,
        Question: q.Question,
        CategoryId: q.CategoryId,
        Answer: q.Answer,
        Improve: q.Improve, 
        CreateDt: null,
        UpdatedDt: null
      }
      
      questions.push(question)
    })
    
    let category: Category = {
      CategoryId: c.CategoryId,
      Category: c.Category,
      Questions: questions,
      CreateDt: null, 
      UpdatedDt: null
    }

    assesementCategories.push(category)
  })

  let assessment: Form = {
    FormId: 0,
    UserId: 0,
    CreatedDt: null,
    UpdateDt: null,
    Categories: assesementCategories
  }
  
  return assessment
}

export default { buildAssessment }
  
