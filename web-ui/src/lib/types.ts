
export interface BasicCalc {
  assessment_id: string,
  total_stars:   number,
  physical:      number,
  emotional:     number,
  social:        number,
  spirit:        number,
  professional:  number,
  total:         number,
  average_rank:  number, 
  create_dt:     string,
  updated_dt:    string,
} 

export interface Question {
  Id:         number,
  Question:   string,
  CategoryId: number,
  Answer:     number,
  Improve:    boolean
  CreateDt:   string | null,
  UpdatedDt:  string | null,
}

export interface Category {
  Id: number,
  Category:   string,
  Questions:  Question[],
  CreateDt:   string | null,
  UpdatedDt:  string | null
}

export interface Assessment {
  Id:         string,
  Categories: Category[]
  CreatedDt:  string | null,
  UpdateDt:   string | null,
}

export interface Response {
   assessment_id: string
   category_id:   number, 
   question_id:   number,
   answer:        number, 
   improve:       boolean,
   create_dt:     string,
   updated_dt:    string,
}
