import { Bar, Line, Pie } from 'react-chartjs-2'
import React from 'react'

export default function DashboardGraph(props) {

  const testDeposit = props.data.expenses;
  console.log(props.data)
  let chartDepositData = [];
  
  if (props.data) {

  // helper function to get the weeks label (x-axis when needing)
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

      // LabelList is x-axis on graph and amountList is y-axis
      let labelList = [];
      let amountList = [];
      let total = 0;

      //Creates new date objects with todays date
      let endDate = new Date()
      let startDate = new Date()

      //Sets the start date based on how many days we have
      startDate.setDate(endDate.getDate() - daysBefore)

      //When you need daily values
      if (dwmValue === "daily") {
        // Converts date objects to ISO format string with extra time deleted 
        startDate = startDate.toISOString().slice(0, 10);
        endDate = endDate.toISOString().slice(0, 10);

        //Goes through each object in the array to check if it matches the date criteria
        depositType.forEach(eachDeposit => {
          if ((eachDeposit.depositDate >= startDate) && (eachDeposit.depositDate <= endDate)) {
            labelList.push(eachDeposit.depositDate.slice(0, 10));
            amountList.push(eachDeposit.amount / 100)
          }
        })
      }

      // When you want to check for monthly values
      if (dwmValue === "weekly") {

        //Creates the weeks label which will be registered as labelList (x-axis on graph)
        labelList = weeksLabel(startDate, endDate);

        startDate = startDate.toISOString().slice(0, 10);
        endDate = endDate.toISOString().slice(0, 10);

        // this is used in the second if statement below. It is for determining the end period of each week
        // to help filter the dates into the proper weeks correctly
        let endWeekDate = "";

        // each i represents each index of the labelList (weekLabel).
        // In other words, each i represents a week
        for (let i = 0; i < labelList.length; i++) {
          if (i === labelList.length - 1) {
            endWeekDate = endDate;
          } else {
            endWeekDate = labelList[i + 1]
          }

          //accumulator for amount sum each week
          let sum = 0
          depositType.forEach(eachDeposit => {
            if ((eachDeposit.depositDate >= labelList[i]) && (eachDeposit.depositDate <= endWeekDate)) {
              sum += eachDeposit.amount / 100;
            }
          })
          amountList.push(sum)

        }
      }

      // returns an array. 0-index is for x-axis, 1-index is for y-axis, and total just represents the array of 1-index (for summary)
      total = amountList.reduce((a, b) => a + b, 0);
      return [labelList, amountList, total];
    }
/////////////////////////////////

    //Just determining if we should take weekly or daily based on value received. May have to change a little
    let dwmProps = "";

    if (props.daysAgo <= 30) {
      dwmProps = "daily"
    } else {
      dwmProps = "weekly"
    }

    // This is an example of creating data for the charts
    chartDepositData = getChartFromNow(props.daysAgo, dwmProps, testDeposit);

  }

  return (
    <section className="graph_dashboard">
      <div>
        I am graph component
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