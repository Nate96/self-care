import { Form, Category, Question, UserData, BasicAnalyse, FormResponse } from './../lib/types'
import Config from '../config'

/**
 * Gets all forms for a given user
 * @param userId 
 * @returns {Form[]}
 */
async function getUserForms(userId: number): Promise<Form[]> {
    let body
    try {
      let response = await fetch(Config.getForms + userId)
      body = await response.json()
  
      return body
    }
    catch(error){
      console.log(error)
    }
  
    return body
}

/**
 * gets all caetories
 * @returns {Category[]}
 */
async function getCategories(): Promise<Category[]> {
    let body
    try {
      let response = await fetch(Config.getCategories)
      body = await response.json()
      
      return body
      
    }
    catch(error){
      console.log(error)
    }
    
    return body
}

/**
 * Gets all gestions 
 * @returns {Question[]}
 */
async function getQuestions(): Promise<Question[]> {
    let body
    try {
      let response = await fetch(Config.getQuestions)
      body = await response.json()
      
      return body
    }
    catch(error){
      console.log(error)
    }
  
    return body
}

/**
 * Gets all userdata for a given user 
 * @param userId 
 * @returns 
 */
async function getUserData(userId: number): Promise<UserData[]> {
    let body
    try {
        let response = await fetch(Config.getUserData + userId)
        body = await response.json()
        
        return body
    }
    catch(error){
        console.log(error)
    }
    
    return body        
}


/**
 * Adds a new form to the Form table for a given userid
 * @param userId 
 * @returns {number}
 */
async function createForm(userId: number): Promise<number> {
  userId = 2 //TODO: Delete when Multiple users are supported
  let body
  const requestOptions = {method: 'POST'}

  try {
    let response = await fetch(Config.createForm + userId, requestOptions)
    body = await response.json()

    return body[0].FormId
  }
  catch(error) {
    console.log(error)
  }

  return body[0].FormId
}

/**
 * Adds to the UserData Table
 * @param userData 
 * @returns {string}
 */
async function addUserData(userData: UserData): Promise<string> {
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  }
  try {
    const resposne = await fetch(Config.createUserData, requestOptions)
    const body = await resposne.json()

    return body
  }
  catch(error) {
    console.log(error)
  }

  return "faild"
}

/**
 * Gets the Bacis Analyse for every from for a given user
 * @param userId 
 * @returns {BasicAnalyse[]}
 */
async function getBasicAnalyse(userId: number): Promise<BasicAnalyse[]> {
    let body
    try {
        let response = await fetch(Config.getAnalysis + userId)
        body = await response.json()
        
        return body
    }
    catch(error){
        console.log(error)
    }
    
    return body        

}

/**
 * Gets repsonses for a given form
 * @param formId 
 * @returns {FormResponse[]}
 */
async function getAssessmentReponses(formId: number): Promise<FormResponse[]> {
  let body
  try {
    let response = await fetch(Config.getAssessmentResponse + formId)
    body = await response.json()

    return body
  }

  catch(error) {
    console.log(error)
  }

  return body
}

/**
 * Adds form results for a given from in the Basic Analyse table
 * @param formId 
 * @returns {string}
 */
async function createBasicCalculations(formId: number): Promise<string> {
  let body
  const requestOptions = {method: 'POST'}
  try {
    const resposne = await fetch(Config.createBasicCalulation + formId, requestOptions)
    const body = await resposne.json()

    return body
  }
  catch(error) {
    console.log(error)
  }

  return "faild"
}

export default {
  getCategories, 
  getQuestions, 
  getUserData, 
  getUserForms, 
  createForm, 
  addUserData,
  getBasicAnalyse,
  getAssessmentReponses,
  createBasicCalculations
}