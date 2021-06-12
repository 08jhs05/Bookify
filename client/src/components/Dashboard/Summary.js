import React from 'react'
import { getChartFromNow, convertDateArrToObj } from '../../helpers';
import Paper from '@material-ui/core/Paper';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { useState } from "react";

import { useHistory } from 'react-router-dom';

export default function Summary(props) {
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
    history.push(props.type === "BALANCE" ? '' : `/${props.type.toLowerCase()}s`);
  }

  if (props.data) {
    let dwmProps = "";

    if (props.daysAgo <= 30) {
      dwmProps = "daily"
    } else if (props.daysAgo < 100) {
      dwmProps = "weekly"
    } else {
      dwmProps = "monthly"
    }
    let formatIncomesData = getChartFromNow(props.daysAgo, dwmProps, props.data.incomes);
    let formatExpensesData = getChartFromNow(props.daysAgo, dwmProps, props.data.expenses);

    if (props.type === "INCOME") {
      summaryData = formatIncomesData[2];
      stateIcon = "up";
    } else if (props.type === "EXPENSE") {
      summaryData = formatExpensesData[2];
      stateIcon = "down";
    } else if (props.type === "BALANCE") {
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
      style={hover ? {borderRadius:'20px', backgroundColor: '#E8EAF6'} : {borderRadius:'20px'}}>
      <div className="summary_icon" >{
        stateIcon === 'up' ? <KeyboardArrowUpIcon style={{width:'60px', height:'60px', color:'#303F9F'}}/> :
        stateIcon === 'down' ? <KeyboardArrowDownIcon style={{width:'60px', height:'60px', color:'#E91E63'}}/> : 
        <ImportExportIcon style={{width:'60px', height:'60px'}}/> 
      }</div>
      <div className="summary-right">
        <div className="regularFont">{props.type}</div>
        <div style={{fontSize:'24px'}}>${summaryData}</div>
      </div>
    </Paper>
  );
}