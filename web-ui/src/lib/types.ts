
export interface BasicCalc {
  AssesmmentId: string,
  TotalStars:   number,
  AverageRank:  number, 
  PhysicalAvg:  number,
  EmotionalAvg: number,
  SocialAvg:    number,
  SpiritAvg:    number,
  CreatedDt:    string,
}

export interface Question {
  Id: number,
  Question:   string
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
   AssessementId: string
   CategoryId:    number, 
   QuestionId:    number,
   Answer:        number, 
   Improve:       boolean,
   CreateDt:      string,
}
