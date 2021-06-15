// Imports from react and other components
import { useState } from 'react';
import ExpenseEditForm from "./Form/ExpenseEditForm";
import IncomeEditForm from "./Form/IncomeEditForm";

// Import Material-UI
import { Button, Dialog, DialogActions, DialogContent, Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";

//Import helper functions
import { formatCurrencyForFE } from '../helpers';

let currentID = "";

export default function Datalist(props) {
  const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);
  const { data, type, reloadPage, deleteBtnOnClick } = props;

  return (
    <Paper className='datalist_scrollable' style={{overflow: 'auto', marginTop:'40px'}}>
    <Table stickyHeader size="small">
      <TableHead>
        <TableRow>
          <TableCell>Date</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell>Category</TableCell>
          <TableCell>Notes</TableCell>
          <TableCell>Edit</TableCell>
          <TableCell >Delete</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.length > 0 && Array.isArray(data) && data.map(elem =>  (
          <TableRow key={elem._id}>
            <TableCell>{elem.depositDate.slice(0, 10)}</TableCell>
            <TableCell>{formatCurrencyForFE(elem.amount)}</TableCell>
            <TableCell>{elem.category.length > 1 ? `${elem.category[0]}, ${elem.category[1]}` : elem.category}</TableCell>
            <TableCell>{elem.notes}</TableCell>
            <TableCell>{type === "expense" ? <ExpenseEditForm data={elem} reloadPage={reloadPage} /> : <IncomeEditForm data={elem} reloadPage={reloadPage} />}</TableCell>
            <TableCell ><Button variant="outlined"
              color="secondary"
              value={elem._id}
              onClick={() => {
                currentID = elem._id;
                setOpenDeleteConfirm(true)
              }}>DELETE</Button></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <Dialog open={openDeleteConfirm} onClose={() => { setOpenDeleteConfirm(false) }} aria-labelledby="delete-dialog-title">
          <DialogContent>Are you sure you want to delete?
            <DialogActions>
              <Button onClick={() => {
                deleteBtnOnClick(currentID);
                setOpenDeleteConfirm(false);
              }}
                color="secondary">
                Yes
              </Button>
              <Button onClick={() => { setOpenDeleteConfirm(false) }} color="primary">
                No
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
  </Paper>
  );
}