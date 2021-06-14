import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import axios from 'axios';
import { useEffect, useState } from "react";

export default function SearchField(props) {
  // The first commit of Material-UI
  let today = new Date()
  let daysBefore = new Date()
  daysBefore.setDate(today.getDate() - 10)

  const [selectedStartDate, setSelectedDate] = useState(daysBefore);
  const [selectedEndDate, setSelectedEndDate] = useState(today);

  useEffect(() => {
    let isMounted = true;
    /////////////
    axios
      .get("/api/incomes", { params: { queryDate: selectedStartDate } })
      .then((res) => {
        console.log(res.data)

        props.searchFieldCallback({
          queryDate: selectedStartDate,
          data: res.data })

        props.setTemp(selectedEndDate);
      });
    return () => {
      isMounted = false;
    };
  }, [selectedEndDate]);
  
  const handleDateChange = (date) => {
    console.log("what is the date?", date)
    setSelectedDate(date);
  };

  const handleEndDateChange = (date) => {
    setSelectedEndDate(date);
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="yyyy-MM-dd"
          margin="normal"
          id="date-picker-inline"
          label="Start Date"
          value={selectedStartDate}
          maxDate={new Date(selectedEndDate)}
          disableFuture
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="End Date"
          format="yyyy-MM-dd"
          value={selectedEndDate}
          onChange={handleEndDateChange}
          disableFuture
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
    <FormControl component="fieldset">
      <FormLabel component="legend">Check for Every:</FormLabel>
      <RadioGroup row aria-label="position" name="position" defaultValue="top">
        <FormControlLabel
          value="daily"
          control={<Radio color="primary" />}
          label="Day"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="weekly"
          control={<Radio color="primary" />}
          label="Week"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="monthly"
          control={<Radio color="primary" />}
          label="Month"
          labelPlacement="bottom"
        />
      </RadioGroup>
    </FormControl>
      </Grid>
    </MuiPickersUtilsProvider>
  );
}