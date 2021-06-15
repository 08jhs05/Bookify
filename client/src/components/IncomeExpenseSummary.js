//Import React
import React from "react";

// Import Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// Import helper functions
import { getChartFromNow, formatCurrencyForFE } from '../helpers'

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function IncomeExpenseSummary(props) {
  const classes = useStyles();
  const {data, daysAgo, } = props;
  let formatDepositData = [0,0];

  let endDate = new Date()
  let startDate = new Date()

  if (data) {
    let dwmProps = "";

    if (daysAgo <= 30) {
      dwmProps = "daily"
    } else if (daysAgo < 150){
      dwmProps = "weekly"
    } else {
      dwmProps = "monthly"
    }

    // This is an example of creating data for the charts
    formatDepositData = getChartFromNow(daysAgo, dwmProps, data);
  
    let daysBefore = daysAgo
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