export interface BasicAnalyse {
  FormId: number,
  AverageRank: number, 
  TotalStars: number,
  CreatedDt: Date
}

export interface Question {
  QuestionId: number,
  Question: string
  CategoryId: number,
  CreateDt: Date | null,
  UpdatedDt: Date | null,
  Answer: number,
  Improve: Boolean
}

export interface Category {
  CategoryId: number,
  Category: string,
  Questions: Question[],
  CreateDt: Date | null,
  UpdatedDt: Date | null
}

export interface Form {
  FormId: number,
  UserId: number,
  CreatedDt: Date | null,
  UpdateDt: Date | null,
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