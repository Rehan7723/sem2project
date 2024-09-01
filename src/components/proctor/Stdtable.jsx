import SsidChartIcon from '@mui/icons-material/SsidChart';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import "../../styles/Home.css";
import '../../styles/leave.css';
import "../../styles/profile.css";


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

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs};
}

const rows = [
  createData('Ethan Parker', '1MS23MC085', 2, 7.34),
  createData('Sophia Bennett', '1MS23MC014', 2, 9.58),
  createData('Olivia Carter', '1MS23MC092', 2, 8.12),
  createData('Liam Davis', '1MS23MC007', 2, 7.89),
  createData('Emma Harrison', '1MS23MC056', 2, 9.03),
];



export default function Stdtable() {

    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <TableContainer component={Paper} className='fonts'>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Student Name</StyledTableCell>
            <StyledTableCell align="right">USN</StyledTableCell>
            <StyledTableCell align="right">Semester</StyledTableCell>
            <StyledTableCell align="right">CGPA</StyledTableCell>
            <StyledTableCell align="center">Result</StyledTableCell>
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
              <React.Fragment>
      <Button variant="contained" color="success" endIcon={<SsidChartIcon/>} onClick={handleClickOpen}>
                 Result
              </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className='alert-box'
      >
        <DialogTitle id="alert-dialog-title">
          <h1>Profile</h1>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          
              <div className='profile-info'>
                <h2 className='profile-name1'>Rehan Shariff</h2>
                <ul>
                  <li><span>USN: </span> 1MS23MC081</li>
                  <li><span>Semester: </span> 2</li>
                  <li><span>Passing year: </span> 2025</li>
                </ul>
              </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>

              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
