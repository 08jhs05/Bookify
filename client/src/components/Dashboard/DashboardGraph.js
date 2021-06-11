import { Bar, Line, Pie } from 'react-chartjs-2'
import React from 'react'
import { getChartFromNow, convertDateArrToObj } from '../../helpers';

export default function DashboardGraph(props) {


  let incomesChartData = []
  let expensesChartData = []
  
  let formatIncomesData = []
  let formatExpensesData = []
  let totalLabel = [];

  console.log('-----------')
  console.log(props.data.incomes)


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
    console.log('Total is: $' + formatIncomesData[2])
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
              data: incomesChartData,

            },
            {
              label: 'Total Expenses',
              data: expensesChartData,
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