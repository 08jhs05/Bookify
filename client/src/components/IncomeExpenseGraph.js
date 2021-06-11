import { Bar, Line, Pie } from 'react-chartjs-2'
import React from 'react'



export default function IncomeExpenseGraph(props) {
  
console.log('======================')
console.log(props.data)
  
  return (
    <section className="incomeExpenseGraph">
      <div>
        I am graph component.
      </div>
    </section>
  );
}

/////////////////////////////////////////

// import { Bar, Line, Pie } from 'react-chartjs-2'
// import React from 'react'
// import { getChartFromNow, convertDateArrToObj } from '../helpers'


// export default function IncomeExpenseGraph(props) {
  
//   let formatIncomesData = [0,0];
//   let totalIncomes = props.data


//   if (props.data) {

//     //Just determining if we should take weekly or daily based on value received. May have to change a little
//     let dwmProps = "";

//     if (props.daysAgo <= 30) {
//       dwmProps = "daily"
//     } else if (props.daysAgo < 100){
//       dwmProps = "weekly"
//     } else {
//       dwmProps = "monthly"
//     }

//     // This is an example of creating data for the charts
//     formatIncomesData = getChartFromNow(props.daysAgo, dwmProps, totalIncomes);    

//     //incomesChartData = convertDateArrToObj(formatIncomesData[0], formatIncomesData[1])
//   }

//   return (
//     <section className="incomeExpenseGraph">
//       <div>
//         <Line
//           data={{
//             labels: formatIncomesData[0],
//             datasets: [{
//               label: 'Total Incomes',
//               data: formatIncomesData[1],

//             }
//             ]
//           }}
//           width={500}
//           height={600}
//           options={{

//             responsive: false,
//             maintainAspectRatio: true,
//             scales: {
//               yAxes: [
//                 {
//                   ticks: {
//                     beginAtZero: true,
//                   }
//                 }
//               ]
//             },

//             legend: {
//               labels: {
//                 fontSize: 10,
//               }
//             }
//           }}
//         />
//       </div>
//     </section>
//   );

// }