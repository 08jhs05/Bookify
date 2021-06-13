// Import libraries and react functions
import React, { useState } from "react";
import axios from "axios";

// Imports from Material UI
import { Chip, TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { Autocomplete } from "@material-ui/lab";

// Imports helper functions
import { setCurrentDate } from "../../helpers";

export default function ExpenseForm(props) {
  const { reloadPage } = props;
  
  const currentDate = setCurrentDate();

  //useStates for form page open and close + form values.
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState([]);
  const [formValue, setFormValue] = useState({
    depositDate: "",
    amount: "",
    notes: "",
  });

  
  // Closes and Opens form
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  //Handler functions for the form

  const handleChange = (event) => {
    const formValues = event.target.id;
    setFormValue((prev) => ({
      ...prev,
      [formValues]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const completeFormValues = {
      ...formValue,
      category,
    };

    return await axios
      .put("/api/expenses", completeFormValues)
      .then(() => {
        setFormValue({
          depositDate: "",
          amount: "",
          notes: "",
          category: "",
        });
        setCategory([]);
        handleClose();
        reloadPage();
      })
      .catch((err) => console.log("Error Triggered! \n", err));
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        margin="dense"
        onClick={handleClickOpen}
        style={{width:'120px', height:'40px', borderRadius:'15px'}}
      >
        New
        <AddIcon />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Expenses Form</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            id="depositDate"
            type="date"
            onChange={handleChange}
            fullWidth
            inputProps={{ max: `${currentDate}` }}
          />
          <TextField
            margin="dense"
            id="amount"
            label="Enter Amount"
            type="number"
            onChange={handleChange}
            fullWidth
          />

          <Autocomplete
            multiple
            id="category"
            options={[]}
            freeSolo
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip label={option} {...getTagProps({ index })} />
              ))
            }
            renderInput={(params) => (
              <TextField {...params} label="Enter category" />
            )}
            onChange={(event) => setCategory([...category, event.target.value])}
          />

          <TextField
            margin="dense"
            id="notes"
            label="Enter Notes"
            type="text"
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
    </div>
  );
}