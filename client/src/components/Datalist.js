import { Button, Dialog, DialogActions, DialogContent } from "@material-ui/core";
import { useState } from 'react';
import ExpenseEditForm from "./Form/ExpenseEditForm";
import IncomeEditForm from "./Form/IncomeEditForm";

let currentID = "";

export default function Datalist(props) {

  const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);

  return (
    <section className="dataList">
      <div>
        { Array.isArray(props.data) && props.data.map(elem => (
          <div className="dataRow" key={elem._id}>
            {elem.notes}. &nbsp;&nbsp; Category: {elem.category.length > 1 ? `${elem.category[0]}-${elem.category[1]}` : elem.category}, &nbsp;&nbsp; amount: {elem.amount}, &nbsp;&nbsp; time: {elem.depositDate}
            {props.type === "expense" ? <ExpenseEditForm data={elem} reloadPage={props.reloadPage}/> : <IncomeEditForm data={elem} reloadPage={props.reloadPage}/>}
            <Button variant="outlined"
            color="secondary"
            value={elem._id}
            onClick={() => {
              currentID = elem._id;
              setOpenDeleteConfirm(true)}}>DELETE</Button>
          </div>
        ))}
        <Dialog open={openDeleteConfirm} onClose={() => {setOpenDeleteConfirm(false)} } aria-labelledby="delete-dialog-title">
          <DialogContent>Are you sure you want to delete?
            <DialogActions>
              <Button onClick={() => {
                props.deleteBtnOnClick(currentID);
                setOpenDeleteConfirm(false);
                }}
                color="secondary">
                Yes
              </Button>
              <Button onClick={() => {setOpenDeleteConfirm(false)}} color="primary">
                No
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}