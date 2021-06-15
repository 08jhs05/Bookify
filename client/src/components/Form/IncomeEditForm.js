// Import react and react pre-built methods
import React, { Fragment, useState } from 'react';

// Import material-ui
import { Chip, TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import axios from 'axios';
import { setCurrentDate } from '../../helpers';

export default function IncomeEditForm(props) {
  const currentDate = setCurrentDate();

  const { depositDate, amount, notes, _id, reloadPage } = props.data

  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState(props.data.category);
  const [formValue, setFormValue] = useState({
    depositDate: depositDate.substr(0, 10),
    amount: amount / 100 ,
    notes: notes,
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleChange = (event) => {
    const formValues = event.target.id;
    setFormValue(prev => ({
      ...prev,
      [formValues] : event.target.value
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const completeFormValues = {
      ...formValue,
      category
    }

    return await Promise.all([axios.put('/api/incomes', completeFormValues), axios.delete('/api/incomes', { params: { id: _id } })])
    .then(() => {
      setFormValue({
        depositDate: "",
        amount: "",
        notes: "",
        category: ""
      })
      setCategory([])
      handleClose()
      reloadPage()
    })
    .catch(err => console.log("Error Triggered! \n", err));

  }

  return (
    <Fragment>
      <Button variant="outlined" margin="dense" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Data</DialogTitle>
        <DialogContent >
          <TextField
            margin="dense"
            id="depositDate"
            type="date"
            value={formValue.depositDate}
            onChange={handleChange}
            fullWidth
            inputProps={{ max: `${currentDate}` }}
          />
          <TextField
            margin="dense"
            id="amount"
            label="Enter Amount"
            type="number"
            value={formValue.amount}
            onChange={handleChange}
            fullWidth
          />    

          <Autocomplete
            multiple
            id="category"
            options={[]}
            value={category}
            freeSolo
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  label={option}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                label="Enter category"
              />
            )}
            onChange={(event, newValue) => setCategory(newValue)}
          />

          <TextField
            margin="dense"
            id="notes"
            label="Enter Notes"
            type="text"
            value={formValue.notes}
            onChange={handleChange}
            fullWidth
          />    
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}