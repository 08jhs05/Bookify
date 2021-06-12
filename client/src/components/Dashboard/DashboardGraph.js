import { Bar, Line, Pie } from 'react-chartjs-2'
import React from 'react'
import { getChartFromNow, convertDateArrToObj } from '../../helpers';
import { Divider } from '@material-ui/core';

import Paper from '@material-ui/core/Paper';

export default function DashboardGraph(props) {


  let incomesChartData = []
  let expensesChartData = []
  
  let formatIncomesData = []
  let formatExpensesData = []
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
    formatIncomesData = getChartFromNow(props.daysAgo, dwmProps, props.data.incomes);
    formatExpensesData = getChartFromNow(props.daysAgo, dwmProps, props.data.expenses);
    
    totalLabel = formatIncomesData[0].concat(formatExpensesData[0])
    totalLabel.sort((a,b) =>a.localeCompare(b))
    totalLabel = [...new Set(totalLabel)]

    incomesChartData = convertDateArrToObj(formatIncomesData[0], formatIncomesData[1])
    expensesChartData = convertDateArrToObj(formatExpensesData[0], formatExpensesData[1])
  }

  return (
      <Paper className="paper_graph" elevation={2} style={{borderRadius:'20px'}}>
      <h3 style={{marginBottom: '20px', marginTop: 0}}>Trend</h3>
      <Divider style={{marginBottom: '20px', height: '2px'}}/>
      <div style={{marginTop: 'auto', marginBottom: 'auto', backgroundColor:'#f8f9ff'}}>
        <Line
          data={{
            labels: totalLabel,
            datasets: [{
              label: 'Total Incomes',
              data: incomesChartData,
              borderColor: 'rgba(54, 162, 235, 0.9)',
              tension: 0.1
            },
            {
              label: 'Total Expenses',
              data: expensesChartData,
              borderColor: 'rgba(255, 99, 132, 0.9)',
              tension: 0.1
            }
            ]
          }}
          width={400}
          height={400}
          options={{
            responsive: true,
            maintainAspectRatio: false,
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
      </Paper>
  );
}