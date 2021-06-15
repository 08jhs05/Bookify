// Import react and pre-built methods
import React from 'react'
import { useState } from "react";
import { useHistory } from 'react-router-dom';

// Import Material-UI
import Paper from '@material-ui/core/Paper';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

// import helper functions
import { getChartFromNow, formatCurrencyForFE } from '../../helpers';

export default function Summary(props) {
  const {type, data, daysAgo} = props;
  let summaryData = "";
  let stateIcon = "";

  const [hover, setHover] = useState(false)

  const onMouseEnterFunc = function() {
    setHover(!hover);
  }

  const onMouseLeaveFunc = function() {
    setHover(!hover);
  }

  const history = useHistory();
  const onClickFunc = function() {
    history.push(type === "BALANCE" ? '' : `/${type.toLowerCase()}s`);
  }

  if (data) {
    let formatIncomesData = getChartFromNow(daysAgo, data.incomes);
    let formatExpensesData = getChartFromNow(daysAgo, data.expenses);

    if (type === "INCOME") {
      summaryData = formatIncomesData[2];
      stateIcon = "up";
    } else if (type === "EXPENSE") {
      summaryData = formatExpensesData[2];
      stateIcon = "down";
    } else if (type === "BALANCE") {
      summaryData = formatIncomesData[2] - formatExpensesData[2];
      stateIcon = "balance";
    }


  }
  return (
    <Paper 
      onMouseEnter={onMouseEnterFunc}
      onMouseLeave={onMouseLeaveFunc}
      onClick={onClickFunc}
      className="paper_summary" 
      elevation={2} 
      style={hover ? {borderRadius:'20px', border: '1px solid', borderColor: '#303F9F'} : {borderRadius:'20px'}}>
      <div className="summary_icon" >{
        stateIcon === 'up' ? <KeyboardArrowUpIcon style={{width:'60px', height:'60px', color:'#303F9F'}}/> :
        stateIcon === 'down' ? <KeyboardArrowDownIcon style={{width:'60px', height:'60px', color:'#E91E63'}}/> : 
        <ImportExportIcon style={{width:'60px', height:'60px'}}/> 
      }</div>
      <div className="summary-right">
        <div className="regularFont">{type}</div>
        <div style={{fontSize:'24px'}}>{formatCurrencyForFE(summaryData)}</div>
      </div>
    </Paper>
  );
}