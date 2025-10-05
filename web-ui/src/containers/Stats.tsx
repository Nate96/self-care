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
              <th>Stars</th>
              <th>Pysical</th>
              <th>Emotional</th>
              <th>Social</th>
              <th>Spirit</th>
              <th>Professional</th>
              <th>Total</th>
              <th>Average</th>
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
                  <td>{row.total_stars}</td>
                  <td align="right">{row.physical}</td>
                  <td align="right">{row.emotional}</td>
                  <td align="right">{row.social}</td>
                  <td align="right">{row.spirit}</td>
                  <td align="right">{row.professional}</td>
                  <td align="right">{row.total}</td>
                  <td align="right">{row.average_rank}</td>
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
