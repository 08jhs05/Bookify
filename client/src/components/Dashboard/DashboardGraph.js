// import external library
import {Line } from 'react-chartjs-2'

// Import helper functions
import { getChartFromNow, convertDateArrToObj, convertMonthLabel } from '../../helpers';

// Import Material-UI
import { Divider, Paper } from '@material-ui/core';

export default function DashboardGraph(props) {
  const { data, daysAgo } = props;

  let incomesChartData = []
  let expensesChartData = []
  
  let formatIncomesData = []
  let formatExpensesData = []
  let totalLabel = [];

  if (data) {
    // This is an example of creating data for the charts
    formatIncomesData = getChartFromNow(daysAgo, data.incomes);
    formatExpensesData = getChartFromNow(daysAgo, data.expenses);
    
    totalLabel = formatIncomesData[0].concat(formatExpensesData[0])
    totalLabel.sort((a,b) =>a.localeCompare(b))
    totalLabel = [...new Set(totalLabel)]

    if (daysAgo >= 150){
      formatIncomesData[0] = convertMonthLabel(formatIncomesData[0])
      formatExpensesData[0] = convertMonthLabel(formatExpensesData[0])
      totalLabel=totalLabel.slice(11)
    }

    incomesChartData = convertDateArrToObj(formatIncomesData[0], formatIncomesData[1].map(x => x/100))
    expensesChartData = convertDateArrToObj(formatExpensesData[0], formatExpensesData[1].map(x => x/100))
  }

  return (
      <Paper className="paper_graph" elevation={2} style={{borderRadius:'20px'}}>
      <h1 style={{marginBottom: '20px', marginTop: 0, fontSize:'28px'}}>Trend</h1>
      <Divider style={{margin: 0, height: '2px'}}/>
      <div style={{marginTop: 'auto', marginBottom: 'auto'}}>
        <Line
          data={{
            labels: totalLabel,
            datasets: [{
              label: 'Total Incomes',
              data: incomesChartData,
              borderColor: '#303F9F',
              backgroundColor: '#303F9F',
              tension: 0.1
            },
            {
              label: 'Total Expenses',
              data: expensesChartData,
              borderColor: '#E91E63',
              backgroundColor: '#E91E63',
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