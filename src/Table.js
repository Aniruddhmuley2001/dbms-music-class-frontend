import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function BasicTable({ url }) {
  let [res, setRes] = React.useState({ fields: [], rows: [] });

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        url,
        {
          mode: "cors"
        }
      );
      setRes(await response.json());
      // console.log(res)
    };
    fetchData();
  }, [url]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {res.fields.map(el => (
              <TableCell
                component="th"
                key={el.columnID.toString() + el.tableID.toString()}
              >
                {el.name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {res.rows.map(row => (
            <TableRow
              key={row[0]}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {row.map(el => (
                <TableCell>{el}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
