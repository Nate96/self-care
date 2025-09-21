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
    setBasicAnalyse(basicAnalyse)
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
              <th>#</th>
              <th>Date</th>
              <th>Average Rank</th>
              <th>Total Stars</th>
              <th>Pysical Average</th>
              <th>Emotional Average</th>
              <th>Socail Average</th>
              <th>Spirit Average</th>
            </tr>
          </thead>
          <tbody>
            {basicAnalyse?.map((row, index, arr) => {
              return (
                <tr key={index}>
                  <td>
                    <Link
                      to="/view-assessment" 
                      state={{details: row.AssesmmentId}}
                      >
                      {index}
                    </Link>
                    </td>
                  <td>{new Date(row.CreatedDt).toDateString()}</td>
                  <td>{row.AverageRank}</td>
                  <td>{row.TotalStars}</td>
                  <td>{row.PhysicalAvg}</td>
                  <td>{row.EmotionalAvg}</td>
                  <td>{row.SocialAvg}</td>
                  <td>{row.SpiritAvg}</td>
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
