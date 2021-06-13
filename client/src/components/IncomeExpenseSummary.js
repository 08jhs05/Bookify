  
import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { getChartFromNow, convertDateArrToObj, formatCurrencyForFE } from '../helpers'


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function IncomeExpenseSummary(props) {
  const classes = useStyles();
  
  let formatDepositData = [0,0];

  let endDate = new Date()
  let startDate = new Date()

  if (props.data) {
    let dwmProps = "";

    if (props.daysAgo <= 30) {
      dwmProps = "daily"
    } else if (props.daysAgo < 150){
      dwmProps = "weekly"
    } else {
      dwmProps = "monthly"
    }

    // This is an example of creating data for the charts
    formatDepositData = getChartFromNow(props.daysAgo, dwmProps, props.data);
  
    let daysBefore = props.daysAgo

    
      //Sets the start date based on how many days we have
      startDate.setDate(endDate.getDate() - daysBefore)
  
  }
  
  return (
    <React.Fragment>
      Total Amount for Period
      <Typography component="p" variant="h4">
        {formatCurrencyForFE(formatDepositData[2])}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        From {startDate.toISOString().slice(0, 10)}
      </Typography>
    </React.Fragment>
  );
}