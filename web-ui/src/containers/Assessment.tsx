// TODO: total and averages are not working
// TODO: View assessment is showing a blank page, and can edit the assesment
import React, {useEffect} from 'react';

import InfoTable from "../components/InfoTable";
import { useLocation, useNavigate} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import {Category, Question, Response, BasicCalc, Assessment} from '../lib/types';
import FormApi from '../Services/FormApi';

import './../css/Assessment.css'

interface FormProps { readOnly: boolean }

export default function Assess({readOnly}: FormProps) {
  const location = useLocation();
  const { details } = location.state || {};
  const [assessment, SetForm] = React.useState<Assessment>(details);
  const navigate = useNavigate()

  useEffect(() => {
     buildAssessment()
  }, [])

  async function buildAssessment(): Promise<Assessment> {

     if(!readOnly) {
        let categories:  Category[] = await FormApi.getCategories()
        let asssessment: Assessment = {
           Id:         uuidv4(),
           CreatedDt:  Date(),
           UpdateDt:   Date(),
           Categories: categories
        }

        SetForm(asssessment)
        return assessment
     }
     else {
        let categories: Category[] = await FormApi.getCategories(details.id)
        let asssessment: Assessment = {
           Id:         details.id,
           CreatedDt:  categories[0].CreateDt,
           UpdateDt:   categories[0].UpdatedDt,
           Categories: categories
        }

        SetForm(asssessment)
        return assessment
     }
  }

  const updateQuestion = (prop: string, value: any, questionId: number, categoryId: number): void => {
    let cat: Category = assessment.Categories.find(c => c.Id == categoryId)!
    let qu: Question = cat.Questions.find(q => q.Id == questionId)!

    if(prop == "rank"){
       qu.Answer = value
    } 
    else {
      qu.Improve = value
    }
  }

  async function saveAssessment() {
     let averages: number[] = []
     let star_total: number = 0
     let total: number = 0

    assessment.Categories.forEach(category => {
      let category_total: number = 0

      category.Questions.forEach(question => {
        if(question.Improve === undefined) { question.Improve = false }
        if(question.Answer === undefined) { question.Answer = 0 }


        let res: Response = {
          assessment_id:  assessment.Id,
          category_id:    category.Id,
          question_id:    question.Id,
          answer:         question.Answer, 
          improve:        question.Improve,
          create_dt:      "",
          updated_dt:     "",
        }

        category_total += res.answer
        total += res.answer
        if (res.improve) { star_total++ }

        FormApi.addResponse(res)
      })
      averages.push(total / category.Questions.length)
    })
    
    let res: BasicCalc = {
       assessment_id:    assessment.Id,
       total_stars:      star_total,
       average_rank:     total / assessment.Categories.length,
       physical_avg:     averages[0],
       emotional_avg:    averages[1],
       social_avg:       averages[2],
       spirit_avg:       averages[3],
       professional_avg: averages[4],
       create_dt:        "",
       updated_dt:       "",
    }

    FormApi.addBasicCalc(res)
    
    // go to home page
    navigate('/stats') 
  }

  const clearFormData = () => {

  }

  return (
    <div className="NewForm">
      <div className="content">
        <div className="panel details-panel">
          <h1>Self-Care Form</h1>
          {details?.CreateAt &&
            <h4>Created: {details?.CreateAt.toDateString()}</h4>
          }

          <div id="text">
            <p><span>Self-care</span> activities are the things you do to maintain good health and improve well-being. You'll  find that many of these activities are things you already do as part of your normal routine.</p>
            <p>In this assessment you will think about how frequently, or how well, you are performing different  self-care activities. The goal of this assessment is to help you learn about your self-care needs  by spotting patterns and recognizing areas of your life that need more attention.</p>
            <p>There are no right or wrong answers on this assessment. There may be activities that you have  no interest in, and other activities may not be included. This list is not comprehensive, but serves  as a starting point for thinking about your self-care needs.</p>
          </div>

          <div className="legend">
            <div className="legend-row">
              <span className="key">1</span>
              <span className="desc-1">I do this poorly</span>
              <span className="desc-2">I do this rarely or not at all</span>
            </div>
            <div className="legend-row">
              <span className="key">2</span>
              <span className="desc-1">I do this OK</span>
              <span className="desc-2">I do this sometimes</span>
            </div>
            <div className="legend-row">
              <span className="key">3</span>
              <span className="desc-1">I do this well</span>
              <span className="desc-2">I do this often</span>
            </div>
            <div className="legend-row">
              <span className="key">★</span>
              <span className="desc-1">I would like to improve at this</span>
              <span className="desc-2">I would like to do this more frequently</span>
            </div>
          </div>
        </div>

        <div className="panel data-panel">
          {assessment?.Categories?.map((category, index) => {
            return <InfoTable
                      key={index}
                      category={category} 
                      updateQuestion={updateQuestion} />
          })}
        </div>
      </div>
      
      {!readOnly && 
        <div className="button-container">
          <button className="global-btn" onClick={saveAssessment}>Save</button>
        </div>
      }
    </div>
  );
}
