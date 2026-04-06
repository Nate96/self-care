import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LineChart } from '@mui/x-charts/LineChart';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { BasicCalc } from "../lib/types";
import FormApi from "../Services/FormApi";

import "./../css/Stats.css";

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
      <div className="section">
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Date</TableCell>
              <TableCell align="right">Stars</TableCell>
              <TableCell align="right">Physical</TableCell>
              <TableCell align="right">Emotional</TableCell>
              <TableCell align="right">Socail</TableCell>
              <TableCell align="right">Spirit</TableCell>
              <TableCell align="right">Professional</TableCell>
              <TableCell align="right">Average</TableCell>
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {basicAnalyse?.map((row, index, arr) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Link
                    to="/view-assessment" 
                    state={{details: row.assessment_id}}
                    >
                    {new Date(row.create_dt).toDateString()}
                  </Link>
                </TableCell>
                <TableCell align="right">{row.total_stars}</TableCell>
                <TableCell align="right">{row.physical}</TableCell>
                <TableCell align="right">{row.emotional}</TableCell>
                <TableCell align="right">{row.social}</TableCell>
                <TableCell align="right">{row.spirit}</TableCell>
                <TableCell align="right">{row.professional}</TableCell>
                <TableCell align="right">{row.average_rank.toFixed(2)}</TableCell>
                <TableCell align="right">{row.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        </div>
    </div>
  );
};

export default Stats;
