import { Bar, Line, Pie } from 'react-chartjs-2'
import React from 'react'

export default function DashboardGraph(props) {

  const testDeposit = props.data;

  // let marchDeposit = 0;
  // let aprilDeposit = 0;
  // let mayDeposit = 0;

  let chartDepositData = [];
  if (props.data) {
    // testDeposit.forEach(eachDeposit => {
    //   if ((eachDeposit.depositDate > "2021-02-28") && (eachDeposit.depositDate < "2021-04-01")) {
    //          marchDeposit += eachDeposit.amount/1000
    //    }})

    // testDeposit.forEach(eachDeposit => {
    //   if ((eachDeposit.depositDate > "2021-03-31") && (eachDeposit.depositDate < "2021-05-01")) {
    //     aprilDeposit += eachDeposit.amount/1000
    //   }})

    // testDeposit.forEach(eachDeposit => {
    //   if ((eachDeposit.depositDate > "2021-03-31") && (eachDeposit.depositDate < "2021-05-01")) {
    //     mayDeposit += eachDeposit.amount/1000
    //   }})

    const weeksLabel = (d1, d2) => {
      let numOfWeeks = Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000));
      let weekArr = [];

      let newWeek = d1;

      for (let i = 0; i < numOfWeeks; i++) {
        newWeek.setDate(d1.getDate() + 7)
        weekArr.push(newWeek.toISOString().slice(0, 10));
      }

      return weekArr
    }

    //dayBefore will indicate how many days/months before we're checking
    //dwmValue will query on whether we're checking sum amounts by days or months
    //depositType will be either testDeposit or testExpense
    const getChartFromNow = (daysBefore, dwmValue, depositType) => {

      let labelList = [];
      let amountList = [];
      let total = 0;

      let endDate = new Date()
      let startDate = new Date()
      startDate.setDate(endDate.getDate() - daysBefore)

      if (dwmValue === "daily") {
        startDate = startDate.toISOString().slice(0, 10);
        endDate = endDate.toISOString().slice(0, 10);

        depositType.forEach(eachDeposit => {
          if ((eachDeposit.depositDate >= startDate) && (eachDeposit.depositDate <= endDate)) {
            
            labelList.push(eachDeposit.depositDate.slice(0, 10));
            amountList.push(eachDeposit.amount / 100)
          }
        })
      }

      if (dwmValue === "weekly") {

        labelList = weeksLabel(startDate, endDate);

        startDate = startDate.toISOString().slice(0, 10);
        endDate = endDate.toISOString().slice(0, 10);
        let endWeekDate = "";

        for (let i = 0; i < labelList.length; i++) {
          if (i === labelList.length - 1) {
            endWeekDate = endDate;
          } else {
            endWeekDate = labelList[i + 1]
          }

          let sum = 0
          depositType.forEach(eachDeposit => {
            if ((eachDeposit.depositDate >= labelList[i]) && (eachDeposit.depositDate <= endWeekDate)) {
              sum += eachDeposit.amount / 100;
            }
          })
          amountList.push(sum)

        }
      }

      total = amountList.reduce((a, b) => a + b, 0);
      return [labelList, amountList, total];
    }

    let dwmProps = "";

    if (props.daysAgo <= 30) {
      dwmProps = "daily"
    } else {
      dwmProps = "weekly"
    }
    chartDepositData = getChartFromNow(props.daysAgo, dwmProps, testDeposit);

  }

  return (
    <section className="graph_dashboard">
      <h2>Trend</h2>
      <div>
        <Line
          data={{
            labels: chartDepositData[0],
            datasets: [{
              label: 'Total Deposits',
              data: chartDepositData[1],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
              ]
            },

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