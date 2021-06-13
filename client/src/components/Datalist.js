import { Button, Dialog, DialogActions, DialogContent } from "@material-ui/core";
import { useState } from 'react';
import ExpenseEditForm from "./Form/ExpenseEditForm";
import IncomeEditForm from "./Form/IncomeEditForm";

import Paper from '@material-ui/core/Paper';


////////////////
import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
///////////////

import { formatCurrencyForFE } from '../helpers';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));


/////////////////

let currentID = "";

export default function Datalist(props) {
  const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);
  const classes = useStyles();
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
        {props.data.length > 0 && Array.isArray(props.data) && props.data.map(elem =>  (
          <TableRow key={elem._id}>
            <TableCell>{elem.depositDate.slice(0, 10)}</TableCell>
            <TableCell>{formatCurrencyForFE(elem.amount)}</TableCell>
            <TableCell>{elem.category.length > 1 ? `${elem.category[0]}, ${elem.category[1]}` : elem.category}</TableCell>
            <TableCell>{elem.notes}</TableCell>
            <TableCell>{props.type === "expense" ? <ExpenseEditForm data={elem} reloadPage={props.reloadPage} /> : <IncomeEditForm data={elem} reloadPage={props.reloadPage} />}</TableCell>
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
                props.deleteBtnOnClick(currentID);
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












// export default function Datalist(props) {
//   const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);

//   return (
//     <section className="dataList">
//       <div>
//         {Array.isArray(props.data) && props.data.map(elem => (
//           <div className="dataRow" key={elem._id}>
//             {elem.notes}. &nbsp;&nbsp; Category: {elem.category.length > 1 ? `${elem.category[0]}-${elem.category[1]}` : elem.category}, &nbsp;&nbsp; amount: {elem.amount}, &nbsp;&nbsp; date: {elem.depositDate.slice(0, 10)}
//             {props.type === "expense" ? <ExpenseEditForm data={elem} reloadPage={props.reloadPage} /> : <IncomeEditForm data={elem} reloadPage={props.reloadPage} />}
//             <Button variant="outlined"
//               color="secondary"
//               value={elem._id}
//               onClick={() => {
//                 currentID = elem._id;
//                 setOpenDeleteConfirm(true)
//               }}>DELETE</Button>
//           </div>
//         ))}
//         <Dialog open={openDeleteConfirm} onClose={() => { setOpenDeleteConfirm(false) }} aria-labelledby="delete-dialog-title">
//           <DialogContent>Are you sure you want to delete?
//             <DialogActions>
//               <Button onClick={() => {
//                 props.deleteBtnOnClick(currentID);
//                 setOpenDeleteConfirm(false);
//               }}
//                 color="secondary">
//                 Yes
//               </Button>
//               <Button onClick={() => { setOpenDeleteConfirm(false) }} color="primary">
//                 No
//               </Button>
//             </DialogActions>
//           </DialogContent>
//         </Dialog>
//       </div>
//     </section>
//   );
// }