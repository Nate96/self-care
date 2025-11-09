import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BasicCalc } from "../lib/types";
import "./../css/Stats.css";
import FormApi from "../Services/FormApi";
import { LineChart } from '@mui/x-charts/LineChart';

const Stats = () => {
  const [basicAnalyse, setBasicAnalyse] = useState<BasicCalc[]>()

  async function getBasicCalc() {
    const table: BasicCalc[] = await FormApi.getBasicCalcs()
    setBasicAnalyse(table)
  }

  useEffect(() => {
    getBasicCalc()
  }, [])

  console.log(basicAnalyse?.map((x) => x.create_dt))

  return (
    <div className="Stats">
      <div className="section">
        <LineChart
          xAxis={[{ data: [...Array(basicAnalyse?.length).keys() ]  }]}
          series={[
            {
              data: basicAnalyse?.map((x) => x.physical) || [],
              label: 'Physical',
            },
            {
              data: basicAnalyse?.map((x) => x.emotional) || [],
              label: 'Emotional',
            },
            {
              data: basicAnalyse?.map((x) => x.emotional) || [],
              label: 'Emotional',
            },
            {
              data: basicAnalyse?.map((x) => x.social) || [],
              label: 'Social',
            },
            {
              data: basicAnalyse?.map((x) => x.spirit) || [],
              label: 'Spirit',
            },
            {
              data: basicAnalyse?.map((x) => x.professional) || [],
              label: 'Professional',
            },
          ]}
          height={400}
        />
      </div>
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
                  <td align="center">{row.total_stars}</td>
                  <td align="center">{row.physical}</td>
                  <td align="center">{row.emotional}</td>
                  <td align="center">{row.social}</td>
                  <td align="center">{row.spirit}</td>
                  <td align="center">{row.professional}</td>
                  <td align="center">{row.total}</td>
                  <td align="center">{row.average_rank}</td>
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
