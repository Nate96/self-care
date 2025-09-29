import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BasicCalc } from "../lib/types";
import "./../css/Home.css";
import FormApi from "../Services/FormApi";

const Stats = () => {
  const [basicAnalyse, setBasicAnalyse] = useState<BasicCalc[]>()

  async function getBasicCalc() {
    const table: BasicCalc[] = await FormApi.getBasicCalcs()
    setBasicAnalyse(table)
    console.log(table)
  }

  useEffect(() => {
    getBasicCalc()
  }, [])

  return (
    <div className="Home">
      <div className="card-container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>Total Stars</th>
              <th>Average Rank</th>
              <th>Pysical Average</th>
              <th>Emotional Average</th>
              <th>Socail Average</th>
              <th>Spirit Average</th>
              <th>Professiontal Average</th>
            </tr>
          </thead>
          <tbody>
            {basicAnalyse?.map((row, index, arr) => {
              return (
                <tr key={index}>
                  <td>
                    <Link
                      to="/view-assessment" 
                      state={{details: row.assessment_id}}
                      >
                      {new Date(row.create_dt).toDateString()}
                    </Link>
                    </td>
                  <td>{row.average_rank}</td>
                  <td align="right">{row.total_stars}</td>
                  <td align="right">{row.physical_avg}</td>
                  <td align="right">{row.emotional_avg}</td>
                  <td align="right">{row.social_avg}</td>
                  <td align="right">{row.spirit_avg}</td>
                  <td align="right">{row.professional_avg}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
        </div>
    </div>
  );
};

export default Stats;
