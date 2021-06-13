// import { Bar, Line, Pie } from 'react-chartjs-2'
// import React from 'react'



// export default function IncomeExpenseGraph(props) {
  
// console.log('======================')
// console.log(props.data)
  
//   return (
//     <section className="incomeExpenseGraph">
//       <div>
//         I am graph component.
//       </div>
//     </section>
//   );
// }

/////////////////////////////////////////

import { Bar, Line, Pie } from 'react-chartjs-2'
import React from 'react'
import { getChartFromNow, convertDateArrToObj } from '../helpers'


export default function IncomeExpenseGraph(props) {
  
  let formatDepositData = [0,0];

  if (props.data) {

    //Just determining if we should take weekly or daily based on value received. May have to change a little
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
  
    //incomesChartData = convertDateArrToObj(formatIncomesData[0], formatIncomesData[1])
  }

  const data ={
    labels: formatDepositData[0],
    datasets: [{
      label: props.type === 'incomes' ?  'Total Incomes' : 'Total Expenses',
      data: formatDepositData[1],
      borderColor: props.type === 'incomes' ? '#303F9F' : '#E91E63'
    }
    ]
  }

  return (
    <section className="incomeExpenseGraph">
        <Line
          data={data}
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