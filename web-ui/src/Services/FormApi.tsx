import { BasicCalc, Category, Question, Response } from './../lib/types'
import Config from '../config'

async function getCategories(id?: string): Promise<Category[]> {
   if (id) {
       try {
          let categories: Category[] = []
          let res = await fetch(Config.getCategories)
          let cats = await res.json()

          res = await fetch(Config.getQuestions)
          let ques = await res.json()

          res = await fetch(Config.response)
          let ress = await res.json()
         
          for (const c of cats){
             let category: Category = {
                Id: c.id,
                Category:   c.category,
                Questions:  [],
                CreateDt:   c.create_dt,
                UpdatedDt:  c.updated_dt} 

             for (const q of ques) {
                if (q.category_id == c.id) {
                   let res = ress.find((res: Response) => q.id == res.QuestionId)
                   let qu: Question = {
                      Id: q.id,
                      Question:   q.question,
                      CategoryId: q.category_id, 
                      CreateDt:   q.create_dt,
                      UpdatedDt:  q.updated_dt,
                      Answer:     res.Answer,
                      Improve:    res.Improve 
                   }
                   category.Questions.push(qu)
                }
             }
            categories.push(category)
          }

         return categories
       }
       catch(error){
         console.log(error)
         return []
       }
   }
   else {
       try {
          let categories: Category[] = []
          let res = await fetch(Config.getCategories)
          let cats = await res.json()

          res = await fetch(Config.getQuestions)
          let ques = await res.json()

          for (const c of cats){
             let category: Category = {
                Id: c.id,
                Category:   c.category,
                Questions:  [],
                CreateDt:   c.create_dt,
                UpdatedDt:  c.updated_dt} 

             for (const q of ques) {
                if (q.category_id == c.id) {
                   let qu: Question = {
                      Id: q.id,
                      Question:   q.question,
                      CategoryId: q.category_id, 
                      CreateDt:   q.create_dt,
                      UpdatedDt:  q.updated_dt,
                      Answer:     0,
                      Improve:    false}

                   category.Questions.push(qu)
                }
             }
            categories.push(category)
          }
         return categories
       }
       catch(error){
         console.log(error)
         return []
       }
   }
}


async function getBasicCalcs(): Promise<BasicCalc[]> {
    try {
        let analysis:BasicCalc[] = []

        let res = await fetch(Config.calc)
        const rls = await res.json()

        for (const r of rls) {
           let row: BasicCalc = {
              AssesmmentId: r.assessment_id,
              AverageRank:  r.average_rank, 
              TotalStars:   r.total_stars,
              PhysicalAvg:  r.physical_avg,
              EmotionalAvg: r.emotional_avg,
              SocialAvg:    r.social_avg,
              SpiritAvg:    r.spirit_avg,
              CreatedDt:    r.create_dt,
           }
           analysis.push(row)
        }
        return analysis
    }
    catch(error){
        console.log(error)
        return []
    }
    
}

async function addResponse(response: Response) {
   await fetch(Config.response, {
      method:  'POST',
      headers: {'Content-Type': 'application/json'},
      body:    JSON.stringify(response)
   })
}

async function addBasicCalc(calc: BasicCalc) {
   await fetch(Config.calc, {
      method:  'POST',
      headers: {'Content-Type': 'application/json'},
      body:    JSON.stringify(calc)
   })

}

export default {
  getCategories, 
  getBasicCalcs,
  addResponse,
  addBasicCalc
}
