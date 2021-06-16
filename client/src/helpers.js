function createPastDate(type, amount, format) {
  let date = new Date();
  if (type === "last") {
    if (format === "D") {
      date.setDate(date.getDate() - amount);
    } else if (format === "M") {
      date.setMonth(date.getMonth() - amount);
      date.setDate(1);
    } else {
      date.setFullYear(date.getFullYear() - amount);
    }
  } else {
    if (format === "D") {
    } else if (format === "M") {
      date.setDate(1);
    } else {
      date.setDate(1);
      date.setMonth(0);
    }
  }

  return date;
}

function daysDifference(d1, d2) {
  return Math.round((d2 - d1) / (24 * 60 * 60 * 1000));
}

class RGBPicker {
  constructor() {
    this.currentcolorIndex = 0;
    this.colors = [
      '#A1887F',
      '#F06292',
      '#7986CB',
      '#FFD54F',
      '#9575CD',
      '#4FC3F7',
      '#81C784',
      '#FFB74D'];
  }
  getnextColor() {
    this.currentcolorIndex++;
    if (this.currentcolorIndex > this.colors.length - 1) this.currentcolorIndex -= this.colors.length;
    return this.colors[this.currentcolorIndex];
  }
}

//////////////////////////
/// LINE CHART HELPERS ///
//////////////////////////
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


const startEndMonths = (dateInput) => { 
  let firstDay = new Date(dateInput.getFullYear(), dateInput.getMonth(), 1);
  let lastDay = new Date(dateInput.getFullYear(), dateInput.getMonth() + 1, 0);
  
  return [firstDay, lastDay]
}

function monthsDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}


// Converts to [{x: "2020-01-02", y: "45"}, {...},  ...] format
const convertDateArrToObj = (xCor, yCor) => {
  let result = [];
  xCor.forEach(function (v, i) {
    let obj = {};
    obj.x = v;
    obj.y = yCor[i];
    result.push(obj);
  });
  return result;
}



//dayBefore will indicate how many days/months before we're checking
//dwmValue will query on whether we're checking sum amounts by days or months
//depositType will be either testDeposit or testExpense
const getChartFromNow = (daysBefore, depositType) => {

  let dwmValue = "daily"
  
  if (daysBefore <= 30) {
    dwmValue = "daily"
  } else if (daysBefore < 150){
    dwmValue = "weekly"
  } else {
    dwmValue = "monthly"
  }

  depositType.sort(function(a, b) {
    var keyA = (a.depositDate),
      keyB = (b.depositDate);
    // Compare the 2 dates
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  });


  // LabelList is x-axis on graph and amountList is y-axis
  let labelList = [];
  let amountList = [];
  let total = 0;
  let filteredDeposit = [];

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

    /////////////////////////
    depositType.forEach((eachDeposit) => {
      if ((eachDeposit.depositDate >= startDate) && (eachDeposit.depositDate <= endDate)) {
        
			filteredDeposit.push(eachDeposit)
      }
    })

    const res = Array.from(filteredDeposit.reduce(
      (m, {depositDate, amount}) => m.set(depositDate, (m.get(depositDate) || 0) + amount), new Map()
    ), ([depositDate, amount]) => ({depositDate, amount}));
    res.forEach((eachDeposit)=>{
             labelList.push(eachDeposit.depositDate.slice(0, 10));
            amountList.push(eachDeposit.amount)
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

      for (let j = 0; j < depositType.length; j++) {
        if ((depositType[j].depositDate >= labelList[i]) && (depositType[j].depositDate <= endWeekDate)) {
          sum += depositType[j].amount;
        }
      }

      //ForEach style of above for loop -> Creates error when using with react
      // depositType.forEach(eachDeposit => {
      //   if ((eachDeposit.depositDate >= labelList[i]) && (eachDeposit.depositDate <= endWeekDate)) {
      //     sum += eachDeposit.amount;
      //   }
      // })

      amountList.push(sum)

    }
  }


  if (dwmValue === "monthly") {
    startDate.setDate(startDate.getDate() - startDate.getDate() + 2)

    let currentStartEndMonth = startEndMonths(startDate)
    let startMonthDate = currentStartEndMonth[0].toISOString().slice(0, 10);
    let endMonthDate = currentStartEndMonth[1].toISOString().slice(0, 10);
		
    let newMonthDate = currentStartEndMonth[1]
    
		let totalMonths = monthsDiff(startDate, endDate)
    startDate = startDate.toISOString().slice(0, 10);
    endDate = endDate.toISOString().slice(0, 10);
    
    let sum = 0
    for (let i = 0; i <= totalMonths; i++) {
			
      for (let j = 0; j < depositType.length; j++) {
        if ((depositType[j].depositDate >= startMonthDate) && (depositType[j].depositDate <= endMonthDate)) {
          sum += depositType[j].amount;
        }
      }

      //ForEach style of the above for loop -> Creates error when using with react
      // depositType.forEach(eachDeposit => {
      //   if ((eachDeposit.depositDate >= startMonthDate) && (eachDeposit.depositDate <= endMonthDate)) {
      //     sum += eachDeposit.amount;
      //   }
      // })

      amountList.push(sum);

      labelList.push(startMonthDate.slice(0,7))
      
      newMonthDate.setDate(newMonthDate.getDate() + 1)
			currentStartEndMonth = startEndMonths(newMonthDate)
    	startMonthDate = currentStartEndMonth[0].toISOString().slice(0, 10);
    	endMonthDate = currentStartEndMonth[1].toISOString().slice(0, 10);
      newMonthDate = currentStartEndMonth[1]
      
      sum = 0
    }
  }

  // returns an array. 0-index is for x-axis, 1-index is for y-axis, and total just represents the array of 1-index (for summary)
  total = amountList.reduce((a, b) => a + b, 0);
  return [labelList, amountList, total];
}

// Converts currency into humanized form
const formatCurrencyForFE = (value) => {
  const currencyToDollars = value / 100;
  return currencyToDollars.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
};

const setCurrentDate = () => {
  const date = new Date();
  date.setDate(date.getDate());
  const currentDate = date.toISOString().substr(0, 10);

  return currentDate;
}

const convertMonthLabel = (dateArray) => {
  const monthTable = ["X", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
	let result=[];
  let monthSlice = 0
  let yearSlice = 0
  
  for (const eachDate of dateArray){
  	monthSlice = Number(eachDate.slice(5,7))
  	yearSlice = Number(eachDate.slice(0,4))
    result.push(monthTable[monthSlice] + " " + yearSlice)
  }
  return result
}

const dropDownOptions = [
  {key: 0, label: "Last 10 days", value: {type: "last", amount: 10, format: "D"}},
  {key: 1, label: "Last 30 days", value: {type: "last", amount: 30, format: "D"}},
  {key: 2, label: "Current Month", value: {type: "this", format: "M"}},
  {key: 3, label: "Last 3 Months", value: {type: "last", amount: 3, format: "M"}},
  {key: 4, label: "Current Year", value: {type: "this", format: "Y"}},
  {key: 5, label: "Everything", value: {type: "last", amount: 10, format: "M"}}
];

module.exports = {
  createPastDate,
  daysDifference,
  RGBPicker,
  weeksLabel,
  monthsLabel,
  getChartFromNow,
  convertDateArrToObj,
  formatCurrencyForFE,
  setCurrentDate,
  convertMonthLabel,
  dropDownOptions
}