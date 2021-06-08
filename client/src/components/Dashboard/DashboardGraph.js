import { Bar, Line, Pie } from 'react-chartjs-2'
import React from 'react'

export default function DashboardGraph(props) {
  
const testDeposit = props.data;

let marchDeposit = 0;
let aprilDeposit = 0;
let mayDeposit = 0;

if (props.data){
testDeposit.forEach(eachDeposit => {
  if ((eachDeposit.depositDate > "2021-02-28") && (eachDeposit.depositDate < "2021-04-01")) {
         marchDeposit += eachDeposit.amount/1000
   }})

testDeposit.forEach(eachDeposit => {
  if ((eachDeposit.depositDate > "2021-03-31") && (eachDeposit.depositDate < "2021-05-01")) {
    aprilDeposit += eachDeposit.amount/1000
  }})

testDeposit.forEach(eachDeposit => {
  if ((eachDeposit.depositDate > "2021-03-31") && (eachDeposit.depositDate < "2021-05-01")) {
    mayDeposit += eachDeposit.amount/1000
  }})
}

  
  return (
    <section className="graph_dashboard">
      <div>
        I am graph component
        {/* {props.data[0].amount} */}
        <Bar
      data={{
        labels: ['March', 'April', 'May'],
        datasets: [{
            label: 'Total Deposits',
            data: [marchDeposit, aprilDeposit, mayDeposit],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ]
        },

        ]
      }}
      width={300}
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
            fontSize: 25,
          }
        }
      }}
    />
      </div>
    </section>
  );
}