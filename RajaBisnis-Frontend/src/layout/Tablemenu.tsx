import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import DelIcon from "@mui/icons-material/DeleteForever"
import { useNavigate } from "react-router-dom";
import './Stylelayout/Table.css'
import AlertDelete from "./AlertDelete";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
    
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name: string,
  description: string,
  menuimg: string,
  carbs: number,
) {
  return { name, description, menuimg, carbs };
}

const rows = [
  createData("Frozen yoghurt", "159", "6.0", 24),
  createData("Ice cream sandwich", "237", "9.0", 37),
  createData("Eclair", "262", "16.0", 24),
  createData("Cupcake", "305", "3.7", 67),
  createData("Gingerbread", "356", "16.0", 49),
];

export default function Tablemenu() {
  const navigate = useNavigate();
  return (
    
    <TableContainer>
      <Table
        sx={{ width: 1000, m: 5 , borderRadius: "10px", boxShadow: 8}}
        component={Paper}
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Description</StyledTableCell>
            <StyledTableCell align="right">Menuimage</StyledTableCell>
            <StyledTableCell align="right">Edit</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.description}</StyledTableCell>
              <StyledTableCell align="right">{row.menuimg}</StyledTableCell>
              <StyledTableCell align="right">
                <Fab className="edit" color="secondary" sx={{width:50, height:50}} onClick={()=>{navigate(`/Detailm/:id`)}} aria-label="edit">
                  <EditIcon />
                </Fab>
                <AlertDelete/>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
