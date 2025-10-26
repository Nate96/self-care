import { BasicCalc, Category, Question, Response } from './../lib/types'
import Config from '../config'

async function getCategories(id?: string): Promise<Category[]> {
   let categories: Category[] = []
   let cats: any[] = []
   let ques: any[] = []
   let ress: any = []

   try {
      let  res = await fetch(Config.categories)
      cats = await res.json()

      res = await fetch(Config.questions)
      ques = await res.json()

      if (id) {
         res = await fetch(Config.response + `/${id}`)
         ress = await res.json()
      }
   }
   catch(error) {
      console.log(error)
   }

   cats.forEach((c: any) => {
      let category: Category = {
         Id:         c.id,
         Category:   c.category,
         Questions:  [],
         CreateDt:   c.create_dt,
         UpdatedDt:  c.updated_dt
      }

      let categoryQuestions = ques.filter((q: any) => q.category_id == c.id)

      categoryQuestions.forEach((q: any) => {
         let questionsRes = ress.find((ress: any) => ress.question_id == q.id)

         let qu: Question = {
            Id:         q.id,
            Question:   q.question,
            CategoryId: q.category_id, 
            CreateDt:   q.create_dt,
            UpdatedDt:  q.updated_dt,
            Answer:     questionsRes ? questionsRes.answer: 0,
            Improve:    questionsRes ? questionsRes.improve : false 
         }
         category.Questions.push(qu)
      })
      categories.push(category)
   })

   return categories
}


async function getBasicCalcs(): Promise<BasicCalc[]> {
    try {
        let analysis:BasicCalc[] = []

        let res = await fetch(Config.calc)
        const rls = await res.json()

        for (const r of rls) {
           let row: BasicCalc = {
              assessment_id: r.assessment_id,
              total_stars:   r.total_stars, 
              physical:      r.physical,
              emotional:     r.emotional,
              social:        r.social,
              spirit:        r.spirit,
              professional:  r.professional,
              total:         r.total,
              average_rank:  r.average_rank,
              create_dt:     r.create_dt,
              updated_dt:    r.updated_dt
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
