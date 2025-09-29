
export interface BasicCalc {
  assessment_id:    string,
  total_stars:      number,
  average_rank:     number, 
  physical_avg:     number,
  emotional_avg:    number,
  social_avg:       number,
  spirit_avg:       number,
  professional_avg: number,
  create_dt:        string,
  updated_dt:       string,
} 

export interface Question {
  Id:         number,
  Question:   string,
  CategoryId: number,
  CreateDt:   Date | null,
  UpdatedDt:  Date | null,
  Answer:     number,
  Improve:    boolean
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
