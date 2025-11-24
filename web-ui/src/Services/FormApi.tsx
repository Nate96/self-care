import { Assessment, BasicCalc, Category, Question, Response } from './../lib/types'
import Config from '../config'

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
  getBasicCalcs,
  addResponse,
  addBasicCalc,
  getAssessment
}
