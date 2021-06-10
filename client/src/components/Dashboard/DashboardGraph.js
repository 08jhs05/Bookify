import { Bar, Line, Pie } from 'react-chartjs-2'
import React from 'react'

export default function DashboardGraph(props) {

  const testDeposit = props.data.incomes;
  const testExpense = props.data.expenses;

  let incomesData = []
  let expensesData = []
  
  let chartDepositData = []
  let chartExpenseData = []
  let totalLabel = [];

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


    const monthsLabel = (d1, d2) => {
   		
      let numOfMonths = Math.round((d2 - d1) / (30 * 24 * 60 * 60 * 1000));
      let monthArr = [];

      let newMonth = d1;

      for (let i = 0; i < numOfMonths; i++) {
        newMonth.setDate(newMonth.getDate() + (30))
        monthArr.push(newMonth.toISOString().slice(0, 10));
      }

      return monthArr
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

      // Monthly check
      if (dwmValue === "monthly") {
        labelList = monthsLabel(startDate, endDate);

        startDate = startDate.toISOString().slice(0, 10);
        endDate = endDate.toISOString().slice(0, 10);

        // this is used in the second if statement below. It is for determining the end period of each month
        // to help filter the dates into the proper months correctly
        let endMonthDate = "";

        // each i represents each index of the labelList (monthLabel).
        // In other words, each i represents a month
        for (let i = 0; i < labelList.length; i++) {
          if (i === labelList.length - 1) {
            endMonthDate = endDate;
          } else {
            endMonthDate = labelList[i + 1]
          }

          //accumulator for amount sum each month
          let sum = 0
          depositType.forEach(eachDeposit => {
            if ((eachDeposit.depositDate >= labelList[i]) && (eachDeposit.depositDate <= endMonthDate)) {
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


    // Converts to [{x: "2020-01-02", y: "45"}, {...},  ...] format
    const convertDateArrToObj = (xCor, yCor) => {
      let result = [];
      xCor.forEach(function(v,i){
        let obj = {};
        obj.x = v;
        obj.y = yCor[i];
        result.push(obj);
      });
      return result;
    }



/////////////////////////////////

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
      <div>
        I am graph component
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