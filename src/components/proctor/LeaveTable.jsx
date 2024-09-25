import SendIcon from '@mui/icons-material/Send';
import { Alert, Button, Snackbar } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import { useState } from 'react';
import '../../styles/leave.css';

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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Ethan Parker', '09/09/2024','10/09/2024', 2),
    createData('Sophia Bennett', '7/09/2024','' ,1),
    createData('Olivia Carter', '10/09/2024','14/09/2024', 5),
    createData('Liam Davis', '24/09/2024','', 1),
    createData('Emma Harrison', '26/09/2024','27/09/204', 2),
];

export default function LeaveTable() {
  const [open1, setOpen1] = useState(false);

  const handleClick1 = () => {
    setOpen1(true);
  };

  const handleClose1 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen1(false);
  };
  const [open0, setOpen0] = useState(false);

  const handleClick0 = () => {
    setOpen0(true);
  };

  const handleClose0 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen0(false);
  };
  return (
    <TableContainer component={Paper} className='fonts'>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Student Name</StyledTableCell>
            <StyledTableCell align="right">From date</StyledTableCell>
            <StyledTableCell align="right">To date</StyledTableCell>
            <StyledTableCell align="right">Number of days</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right" className='leave-buttons'>
              <Button variant="contained" color="success" onClick={handleClick1} endIcon={<SendIcon/>}>
                 Accept
              </Button>
              < Button variant="contained" color="error" onClick={handleClick0} endIcon={<SendIcon/>}>
                 Reject
              </Button>
              <Snackbar open={open1} autoHideDuration={3000} onClose={handleClose1}>
        <Alert onClose={handleClose1} severity="success">
          The request was accepted successfully!
        </Alert>
      </Snackbar>
      <Snackbar open={open0} autoHideDuration={3000} onClose={handleClose0}>
        <Alert onClose={handleClose0} severity="error">
          The request was rejected!
        </Alert>
      </Snackbar>

              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
