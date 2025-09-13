export interface BasicAnalyse {
  FormId: number,
  AverageRank: number, 
  TotalStars: number,
  CreatedDt: Date
}

export interface DBQuestions {
  QuestionId: number,
  Question:   string
  CategoryId: number,
  CreateDt:   Date | null,
  UpdatedDt:  Date | null,
}

export interface Question {
  QuestionId: number,
  Question:   string
  CategoryId: number,
  CreateDt:   Date | null,
  UpdatedDt:  Date | null,
  Answer:     number,
  Improve:    boolean
}

export interface Categories {
   id:         number,
   category:   string,
   created_dt: string,
   updated_dt: string,

}


export interface Category {
  CategoryId: number,
  Category: string,
  Questions: Question[],
  CreateDt: string | null,
  UpdatedDt: string | null
}

export interface Form {
  FormId: string,
  CreatedDt: string | null,
  UpdateDt: string | null,
  Categories: Category[]
}

export interface UserData {
  UserId: number, 
  QuestionId: number, 
  FormId: number, 
  Answer: number, 
  Improve: Boolean
}

export interface FormResponse {
  CategoryId: number, 
  QuestionId: number,
  Question: string, 
  Answer: number, 
  Improve: boolean
}

export interface Assessment {
   id:           string,
   questions_id: string,
   answer:       number,
   improve:      boolean,
   created_dt:   string, 
   updated_dt:   string
}
