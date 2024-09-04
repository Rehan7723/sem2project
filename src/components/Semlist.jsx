import { TableHead } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import '../styles/Chatlist.css';
import "../styles/Home.css";
import '../styles/leave.css';
import "../styles/profile.css";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name) {
  return { name};
}

const rows = [
  createData('Semester 1'),
  createData('Semester 2'),
  createData('Semester 3'),
  createData('Semester 4')
];



export default function Semlist() {
  return (
    <TableContainer component={Paper} className='fonts'>
      <Table  aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align='center'>Semester Result</StyledTableCell>
            {/* <StyledTableCell align="right">USN</StyledTableCell>
            <StyledTableCell align="right">Semester</StyledTableCell>
            <StyledTableCell align="right">CGPA</StyledTableCell>
            <StyledTableCell align="center">Result</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" align='center'>
                {row.name}
              </StyledTableCell>
              {/* <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
