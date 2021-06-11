import React from 'react'
import { getChartFromNow, convertDateArrToObj } from '../../helpers';

export default function Summary(props) {
  let summaryData = "";
  const incomeIcon = "fas fa-angle-up";
  const expenseIcon = "fas fa-angle-down"
  const balanceIcon = "fas fa-exchange-alt"
  let stateIcon = "";

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
      stateIcon = incomeIcon;
    } else if (props.type === "EXPENSE") {
      summaryData = formatExpensesData[2];
      stateIcon = expenseIcon;
    } else if (props.type === "BALANCE") {
      summaryData = formatIncomesData[2] - formatExpensesData[2];
      stateIcon = balanceIcon;
    }


  }
  return (
    <section className="summary">

      <div className="summary-box">
        <div><i className={stateIcon}></i></div>
        <div className="summary-right">
          <div>{props.type}</div>
          <div>${summaryData}</div>
        </div>
      </div>
    </section>
  );
}