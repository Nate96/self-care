import { Assessment, BasicCalc, Category, Question, Response } from './../lib/types'
import Config from '../config'

async function getCategories(id?: string): Promise<Category[]> {
   let categories: Category[] = []
   let cats: any[] = []
   let ques: any[] = []
   let ress: any = []

   try {
      let  res = await fetch(Config.getCategories)
      cats = await res.json()

      res = await fetch(Config.getQuestions)
      ques = await res.json()

      if (id) {
         res = await fetch(Config.response + `${id}`)
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

async function getAssessment(id: string): Promise<Assessment> {
   let rsl
   console.log(`Debug, getAssessment, id: ${id}`)

   try {
      if (id) {
         rsl = await fetch(Config.assessment + `/${id}`)
      }
      else {
         rsl = await fetch(Config.assessment)
      }

      rsl = await rsl.json()
      console.log(JSON.stringify(rsl, null, 2))

      let categories: Category[] = []

      for (let current = 0; current < rsl.length; current++) {
         console.log(`Bebug, Current: ${current}, ${JSON.stringify(rsl[current])}, ${rsl.length}`)
         if (current > 0) {
            let previous = current - 1

            if (rsl[current].category_id == rsl[previous].category_id) {
               let question: Question = {
                  Id:         rsl[current].question_id,
                  Question:   rsl[current].question,
                  CategoryId: rsl[current].category_id,
                  Answer:     rsl[current].answer,
                  Improve:    rsl[current].improve,
                  CreateDt:   rsl[current].create_dt,
                  UpdatedDt:  rsl[current].updated_dt
               }

               categories[question.CategoryId - 1].Questions.push(question)
            }
            else {
               let category: Category = {
                  Id:        rsl[current].category_id,
                  Category:  rsl[current].category,
                  Questions: [],
                  CreateDt:  rsl[current].create_dt,
                  UpdatedDt: rsl[current].updated_dt,
               }
               categories.push(category)

               let question: Question = {
                  Id:         rsl[current].question_id,
                  Question:   rsl[current].question,
                  CategoryId: rsl[current].category_id,
                  Answer:     rsl[current].answer,
                  Improve:    rsl[current].improve,
                  CreateDt:   rsl[current].create_dt,
                  UpdatedDt:  rsl[current].updated_dt
               }

               category = categories[question.CategoryId - 1]
               category.Questions.push(question)

            }
         }
         else {
            let category: Category = {
               Id:        rsl[current].category_id,
               Category:  rsl[current].category,
               Questions: [],
               CreateDt:  rsl[current].create_dt,
               UpdatedDt: rsl[current].updated_dt,
            }

            let question: Question = {
               Id:         rsl[current].question_id,
               Question:   rsl[current].question,
               CategoryId: rsl[current].category_id,
               Answer:     rsl[current].answer,
               Improve:    rsl[current].improve,
               CreateDt:   rsl[current].create_dt,
               UpdatedDt:  rsl[current].updated_dt
            }

            category.Questions.push(question)
            categories.push(category)
         }

      }

      let assessment: Assessment = {
         Id:         rsl[0].assessment_id,
         Categories: categories,
         CreatedDt:  rsl[0].created_dt,
         UpdateDt:   rsl[0].updated_dt
      }

      return assessment
   }
   catch(error) { console.log(error) }

    let assessment: Assessment = {
       Id:         "",
       Categories: [],
       CreatedDt:  "",
       UpdateDt:   ""
    }
    return assessment
}


export default {
  getCategories, 
  getBasicCalcs,
  addResponse,
  addBasicCalc,
  getAssessment
}
