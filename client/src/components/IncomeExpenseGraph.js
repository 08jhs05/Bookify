// Import react and external library
import React from 'react'
import { Line } from 'react-chartjs-2'

// Import helper functions
import { getChartFromNow, convertMonthLabel } from '../helpers'


export default function IncomeExpenseGraph(props) {
  const {data, daysAgo, type} = props;
  let formatDepositData = [0,0];

  if (data) {

    formatDepositData = getChartFromNow(daysAgo, data);    
    
    if (daysAgo >= 150){
      formatDepositData[0] = convertMonthLabel(formatDepositData[0])

    }
  }

  const chartData ={
    labels: formatDepositData[0],
    datasets: [{
      label: type === 'incomes' ?  'Total Incomes' : 'Total Expenses',
      data: formatDepositData[1].map(x => x/100),
      borderColor: type === 'incomes' ? '#303F9F' : '#E91E63'
    }
    ]
  }

  return (
    <section className="incomeExpenseGraph">
        <Line
          data={chartData}
          width={600}
          height={300}
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
    </section>
  );

}