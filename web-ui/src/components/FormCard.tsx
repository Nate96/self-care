 import React from 'react'
import { Link } from "react-router-dom";
import { Form } from '../lib/types';
import './../css/FormCard.css'

interface FormCardProps {
  id: number,
  formDetails: Form,
  timeSinceLastAss: string
}

const FormCard = ({id, formDetails, timeSinceLastAss}: FormCardProps) => {
  const getAvgRank = () => {
    let count = 0;
    let total = 0;
    formDetails.Categories.forEach(category => 
      category.Questions.forEach(question => {
        count++;
        total += question.Answer;
      })
    )
    return total / count;
  }

  const getTotalStars = () => {
    let count = 0;
    let total = 0;
    formDetails.Categories.forEach(category => 
      category.Questions.forEach(question => {
        if (question.Improve) {
          count++;
        }
        total++
      })
    )
    return `${count} / ${total}`;
  }

  function getFormCreatedDate(): string {
    const formCreateDate: Date = new Date(formDetails.CreatedDt)
    return formCreateDate.toDateString()
  }

  return (
    <div className="AssessmentCard">
      <Link 
        to="/view-assessment" 
        className="img-container" 
        state={{ details: formDetails }}>
        <img src="https://wallpapercave.com/wp/1rY39i5.jpg" alt={`assessment #${id}`}/>
        <div className="centered">Click to View</div>
      </Link>
      <div className="content">
        <span className="label">Created</span>
        <span className="value">{getFormCreatedDate()}</span>
        <span className="label">Average Rank</span>
        <span className="value">{getAvgRank()}</span>
        <span className="label">Starred</span>
        <span className="value">{getTotalStars()}</span>
        <span className="label">Time Since Last Assessment</span>
        <span className="value">{timeSinceLastAss}</span>
      </div>

    </div>
  )
}

export default FormCard