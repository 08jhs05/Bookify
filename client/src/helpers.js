function createPastDate(type, amount, format){
  let date = new Date();
  if(type === "last") {
    if(format === "D"){
      date.setDate(date.getDate() - amount);
    } else if(format === "M"){
      date.setMonth(date.getMonth() - amount);
      date.setDate(1);
    } else {
      date.setFullYear(date.getFullYear() - amount);
    }
  } else {
      if(format === "D"){
        //date = date.getDate()
      } else if(format === "M"){
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

module.exports = { createPastDate, daysDifference }