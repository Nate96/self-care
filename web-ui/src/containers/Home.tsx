import React, { useState, useEffect } from "react";
import FormCard from "../components/FormCard";
import { Form, Category, BasicAnalyse, FormResponse } from "../lib/types";
import "./../css/Home.css";
import FormApi from "../Services/FormApi";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import AssessmentBuilder from "../Services/AssessmentBuilder";
import {expected} from '../tests/Form.test'

const Home = () => {
  const [basicAnalyse, setBasicAnalyse] = useState<BasicAnalyse[]>()

  async function getBasicAnalyse() {
    const basicAnalyse: BasicAnalyse[] = await FormApi.getBasicAnalyse(2)
    setBasicAnalyse(basicAnalyse)
  }

  //TODO: Implment
  async function viewAssessment(formId: number): Promise<Form> {
    let userId = 2
    
    if(formId == undefined) {
      const form: Form = { FormId: 0, UserId: 0, CreatedDt: null, UpdateDt: null, Categories: [] }
      return form
    }
    console.log('form id', formId)

    const responses: FormResponse[] = await FormApi.getAssessmentReponses(formId)
    const categories: Category[] = await FormApi.getCategories()

    console.log('home/cat:', categories)
    console.log('home/res:', responses)

    const form: Form = AssessmentBuilder.buildAssessment(categories, responses)

    console.log('home/Assessment', form)

    return form
  }

  useEffect(() => {
    getBasicAnalyse()
  }, [])

  return (
    <div className="Home">
      <div className="card-container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>created</th>
              <th>Average Rank</th>
              <th>Total Stars</th>
            </tr>
          </thead>
          <tbody>
            {basicAnalyse?.map((row, index, arr) => {
              return (
                <tr key={index}>
                  <td>
                    <Link
                      to="/view-assessment" 
                      state={{details: row.FormId}}
                      >
                      {index}
                    </Link>
                    </td>
                  <td>{new Date(row.CreatedDt).toDateString()}</td>
                  <td>{row.AverageRank}</td>
                  <td>{row.TotalStars}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>

        </div>
    </div>
  );
};

export default Home;