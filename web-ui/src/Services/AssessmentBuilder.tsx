import { Form, Category, Question, FormResponse } from "../lib/types"

/**
 * Builds Assessment 
 * @param userForm 
 * @param questions 
 * @param categories 
 * @param responses 
 * @returns {Form} 
 */
function buildAssessment(categories: Category[], responses: FormResponse[]): Form {
  let assesementCategories: Category[] = []

  console.log('builder/cat:', assesementCategories)
  console.log('builder/res:', responses)
  
  categories.forEach(c => {
    let categoryQuestions: FormResponse[] = responses.filter(a => a.CategoryId === c.CategoryId)!
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
  