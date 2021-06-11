import { Bar, Line, Pie } from 'react-chartjs-2'
import React from 'react'
import { getChartFromNow, convertDateArrToObj } from '../../helpers';

export default function DashboardGraph(props) {

  const testDeposit = props.data.incomes;
  const testExpense = props.data.expenses;

  let incomesData = []
  let expensesData = []
  
  let chartDepositData = []
  let chartExpenseData = []
  let totalLabel = [];

  if (props.data) {

    //Just determining if we should take weekly or daily based on value received. May have to change a little
    let dwmProps = "";

    if (props.daysAgo <= 30) {
      dwmProps = "daily"
    } else if (props.daysAgo < 100){
      dwmProps = "weekly"
    } else {
      dwmProps = "monthly"
    }

    // This is an example of creating data for the charts
    chartDepositData = getChartFromNow(props.daysAgo, dwmProps, testDeposit);
    chartExpenseData = getChartFromNow(props.daysAgo, dwmProps, testExpense);
    
    totalLabel = chartDepositData[0].concat(chartExpenseData[0])
    totalLabel.sort((a,b) =>a.localeCompare(b))
    totalLabel = [...new Set(totalLabel)]

    incomesData = convertDateArrToObj(chartDepositData[0], chartDepositData[1])
    expensesData = convertDateArrToObj(chartExpenseData[0], chartExpenseData[1])
  }

  return (
    <section className="graph_dashboard">
      <h2>Trend</h2>
      <div>
        <Line
          data={{
            labels: totalLabel,
            datasets: [{
              label: 'Total Incomes',
              data: incomesData,

            },
            {
              label: 'Total Expenses',
              data: expensesData,
            }
            ]
          }}
          width={500}
          height={600}
          options={{

            responsive: false,
            maintainAspectRatio: true,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  }
                }
              ]
            },

            legend: {
              labels: {
                fontSize: 10,
              }
            }
          }}
        />
      </div>
    </section>
  );
}