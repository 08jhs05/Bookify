const testUser = require("./user_seeds");

const testExpense = [
  // SEPTEMBER

  { user_id: testUser[0], depositDate: "2020-09-03", amount: 25000, category: ["supplies"], notes: "standard weekly supplies" },
  { user_id: testUser[0], depositDate: "2020-09-03", amount: 100000, category: ["ingredients"], notes: "Weekly ingredients" },

  { user_id: testUser[0], depositDate: "2020-09-10", amount: 500000, category: ["wages"], notes: "bi-weekly wages for employees" },
  { user_id: testUser[0], depositDate: "2020-09-10", amount: 25000, category: ["supplies"], notes: "Weekly supplies" },
  { user_id: testUser[0], depositDate: "2020-09-10", amount: 100000, category: ["ingredients"], notes: "Weekly ingredients" },

  { user_id: testUser[0], depositDate: "2020-09-17", amount: 25000, category: ["supplies"], notes: "Weekly supplies" },
  { user_id: testUser[0], depositDate: "2020-09-17", amount: 100000, category: ["ingredients"], notes: "Weekly ingredients" },

  { user_id: testUser[0], depositDate: "2020-09-24", amount: 500000, category: ["wages"], notes: "bi-weekly wages for employees" },
  { user_id: testUser[0], depositDate: "2020-09-24", amount: 25000, category: ["supplies"], notes: "Weekly supplies" },
  { user_id: testUser[0], depositDate: "2020-09-24", amount: 100000, category: ["ingredients"], notes: "Weekly ingredients" },
  { user_id: testUser[0], depositDate: "2020-09-24", amount: 80000, category: ["bills", "electric"], notes: "monthly electric bill" },
  { user_id: testUser[0], depositDate: "2020-09-24", amount: 15000, category: ["bills", "gas"], notes: "monthly gas bill" },
  { user_id: testUser[0], depositDate: "2020-09-24", amount: 15000, category: ["bills", "phone"], notes: "monthly phone bill" },
  { user_id: testUser[0], depositDate: "2020-09-24", amount: 50000, category: ["bills", "property tax"], notes: "quarterly property tax" },


  // OCTOBER

  { user_id: testUser[0], depositDate: "2020-10-01", amount: 25000, category: ["supplies"], notes: "standard weekly supplies" },
  { user_id: testUser[0], depositDate: "2020-10-01", amount: 100000, category: ["ingredients"], notes: "Weekly ingredients" },

  { user_id: testUser[0], depositDate: "2020-10-08", amount: 25000, category: ["supplies"], notes: "Weekly supplies" },
  { user_id: testUser[0], depositDate: "2020-10-08", amount: 100000, category: ["ingredients"], notes: "Weekly ingredients" },

  { user_id: testUser[0], depositDate: "2020-10-15", amount: 25000, category: ["supplies"], notes: "Weekly supplies" },
  { user_id: testUser[0], depositDate: "2020-10-15", amount: 100000, category: ["ingredients"], notes: "Weekly ingredients" },

  { user_id: testUser[0], depositDate: "2020-10-22", amount: 500000, category: ["wages"], notes: "bi-weekly wages for employees" },
  { user_id: testUser[0], depositDate: "2020-10-22", amount: 25000, category: ["supplies"], notes: "Weekly supplies" },
  { user_id: testUser[0], depositDate: "2020-10-22", amount: 100000, category: ["ingredients"], notes: "Weekly ingredients" },

  { user_id: testUser[0], depositDate: "2020-10-15", amount: 25000, category: ["supplies"], notes: "Weekly supplies" },
  { user_id: testUser[0], depositDate: "2020-10-15", amount: 100000, category: ["ingredients"], notes: "Weekly ingredients" },
  { user_id: testUser[0], depositDate: "2020-10-29", amount: 80000, category: ["bills", "electric"], notes: "monthly electric bill" },
  { user_id: testUser[0], depositDate: "2020-10-29", amount: 15000, category: ["bills", "gas"], notes: "monthly gas bill" },
  { user_id: testUser[0], depositDate: "2020-10-29", amount: 15000, category: ["bills", "phone"], notes: "monthly phone bill" },


  // NOVEMBER

  { user_id: testUser[0], depositDate: "2020-11-05", amount: 500000, category: ["wages"], notes: "bi-weekly wages for employees" },
  { user_id: testUser[0], depositDate: "2020-11-05", amount: 25000, category: ["supplies"], notes: "standard weekly supplies" },
  { user_id: testUser[0], depositDate: "2020-11-05", amount: 100000, category: ["ingredients"], notes: "Weekly ingredients" },

  { user_id: testUser[0], depositDate: "2020-11-12", amount: 25000, category: ["supplies"], notes: "Weekly supplies" },
  { user_id: testUser[0], depositDate: "2020-11-12", amount: 100000, category: ["ingredients"], notes: "Weekly ingredients" },

  { user_id: testUser[0], depositDate: "2020-11-19", amount: 500000, category: ["wages"], notes: "bi-weekly wages for employees" },
  { user_id: testUser[0], depositDate: "2020-11-19", amount: 25000, category: ["supplies"], notes: "Weekly supplies" },
  { user_id: testUser[0], depositDate: "2020-11-19", amount: 100000, category: ["ingredients"], notes: "Weekly ingredients" },

  { user_id: testUser[0], depositDate: "2020-11-26", amount: 25000, category: ["supplies"], notes: "Weekly supplies" },
  { user_id: testUser[0], depositDate: "2020-11-26", amount: 100000, category: ["ingredients"], notes: "Weekly ingredients" },
  { user_id: testUser[0], depositDate: "2020-11-26", amount: 80000, category: ["bills", "electric"], notes: "monthly electric bill" },
  { user_id: testUser[0], depositDate: "2020-11-26", amount: 15000, category: ["bills", "gas"], notes: "monthly gas bill" },
  { user_id: testUser[0], depositDate: "2020-11-26", amount: 15000, category: ["bills", "phone"], notes: "monthly phone bill" },


  // DECEMBER

  { user_id: testUser[0], depositDate: "2020-12-03", amount: 500000, category: ["wages"], notes: "bi-weekly wages for employees" },
  { user_id: testUser[0], depositDate: "2020-12-03", amount: 25000, category: ["supplies"], notes: "standard weekly supplies" },
  { user_id: testUser[0], depositDate: "2020-12-03", amount: 100000, category: ["ingredients"], notes: "Weekly ingredients" },

  { user_id: testUser[0], depositDate: "2020-12-10", amount: 25000, category: ["supplies"], notes: "Weekly supplies" },
  { user_id: testUser[0], depositDate: "2020-12-10", amount: 100000, category: ["ingredients"], notes: "Weekly ingredients" },

  { user_id: testUser[0], depositDate: "2020-12-17", amount: 500000, category: ["wages"], notes: "bi-weekly wages for employees" },
  { user_id: testUser[0], depositDate: "2020-12-17", amount: 25000, category: ["supplies"], notes: "Weekly supplies" },
  { user_id: testUser[0], depositDate: "2020-12-17", amount: 100000, category: ["ingredients"], notes: "Weekly ingredients" },

  { user_id: testUser[0], depositDate: "2020-12-24", amount: 25000, category: ["supplies"], notes: "Weekly supplies" },
  { user_id: testUser[0], depositDate: "2020-12-24", amount: 100000, category: ["ingredients"], notes: "Weekly ingredients" },
  { user_id: testUser[0], depositDate: "2020-12-24", amount: 250000, category: ["wages", "bonus"], notes: "christmas bonus" },

  { user_id: testUser[0], depositDate: "2020-12-31", amount: 500000, category: ["wages"], notes: "bi-weekly wages for employees" },
  { user_id: testUser[0], depositDate: "2020-12-31", amount: 80000, category: ["bills", "electric"], notes: "monthly electric bill" },
  { user_id: testUser[0], depositDate: "2020-12-31", amount: 15000, category: ["bills", "gas"], notes: "monthly gas bill" },
  { user_id: testUser[0], depositDate: "2020-12-31", amount: 15000, category: ["bills", "phone"], notes: "monthly phone bill" },
  { user_id: testUser[0], depositDate: "2020-12-31", amount: 50000, category: ["bills", "property tax"], notes: "quarterly property tax" },

  //JANUARY

  { user_id: testUser[0], depositDate: "2021-01-07", amount: 30000, category: ["supplies"], notes: "standard weekly supplies" },
  { user_id: testUser[0], depositDate: "2021-01-07", amount: 150000, category: ["ingredients"], notes: "Weekly ingredients" },

  { user_id: testUser[0], depositDate: "2021-01-14", amount: 500000, category: ["wages"], notes: "bi-weekly wages for employees" },
  { user_id: testUser[0], depositDate: "2021-01-14", amount: 30000, category: ["supplies"], notes: "Weekly supplies" },
  { user_id: testUser[0], depositDate: "2021-01-14", amount: 150000, category: ["ingredients"], notes: "Weekly ingredients" },

  { user_id: testUser[0], depositDate: "2021-01-21", amount: 30000, category: ["supplies"], notes: "Weekly supplies" },
  { user_id: testUser[0], depositDate: "2021-01-21", amount: 150000, category: ["ingredients"], notes: "Weekly ingredients" },

  { user_id: testUser[0], depositDate: "2021-01-28", amount: 500000, category: ["wages"], notes: "bi-weekly wages for employees" },
  { user_id: testUser[0], depositDate: "2021-01-28", amount: 30000, category: ["supplies"], notes: "Weekly supplies" },
  { user_id: testUser[0], depositDate: "2021-01-28", amount: 150000, category: ["ingredients"], notes: "Weekly ingredients" },
  { user_id: testUser[0], depositDate: "2021-01-28", amount: 80000, category: ["bills", "electric"], notes: "monthly electric bill" },
  { user_id: testUser[0], depositDate: "2021-01-28", amount: 15000, category: ["bills", "gas"], notes: "monthly gas bill" },
  { user_id: testUser[0], depositDate: "2021-01-28", amount: 15000, category: ["bills", "phone"], notes: "monthly phone bill" },


  //FEBRUARY

  { user_id: testUser[0], depositDate: "2021-02-04", amount: 30000, category: ["supplies"], notes: "standard weekly supplies" },
  { user_id: testUser[0], depositDate: "2021-02-04", amount: 150000, category: ["ingredients"], notes: "Weekly ingredients" },

  { user_id: testUser[0], depositDate: "2021-02-11", amount: 500000, category: ["wages"], notes: "bi-weekly wages for employees" },
  { user_id: testUser[0], depositDate: "2021-02-11", amount: 30000, category: ["supplies"], notes: "Weekly supplies" },
  { user_id: testUser[0], depositDate: "2021-02-11", amount: 150000, category: ["ingredients"], notes: "Weekly ingredients" },

  { user_id: testUser[0], depositDate: "2021-02-18", amount: 30000, category: ["supplies"], notes: "Weekly supplies" },
  { user_id: testUser[0], depositDate: "2021-02-18", amount: 150000, category: ["ingredients"], notes: "Weekly ingredients" },

  { user_id: testUser[0], depositDate: "2021-02-25", amount: 500000, category: ["wages"], notes: "bi-weekly wages for employees" },
  { user_id: testUser[0], depositDate: "2021-02-25", amount: 30000, category: ["supplies"], notes: "Weekly supplies" },
  { user_id: testUser[0], depositDate: "2021-02-25", amount: 150000, category: ["ingredients"], notes: "Weekly ingredients" },
  { user_id: testUser[0], depositDate: "2021-02-25", amount: 80000, category: ["bills", "electric"], notes: "monthly electric bill" },
  { user_id: testUser[0], depositDate: "2021-02-25", amount: 15000, category: ["bills", "gas"], notes: "monthly gas bill" },
  { user_id: testUser[0], depositDate: "2021-02-25", amount: 15000, category: ["bills", "phone"], notes: "monthly phone bill" },

  //MARCH

  { user_id: testUser[0], depositDate: "2021-03-04", amount: 30000, category: ["supplies"], notes: "standard weekly supplies" },
  { user_id: testUser[0], depositDate: "2021-03-04", amount: 150000, category: ["ingredients"], notes: "Weekly ingredients" },

  { user_id: testUser[0], depositDate: "2021-03-11", amount: 500000, category: ["wages"], notes: "bi-weekly wages for employees" },
  { user_id: testUser[0], depositDate: "2021-03-11", amount: 30000, category: ["supplies"], notes: "Weekly supplies" },
  { user_id: testUser[0], depositDate: "2021-03-11", amount: 150000, category: ["ingredients"], notes: "Weekly ingredients" },

  { user_id: testUser[0], depositDate: "2021-03-18", amount: 30000, category: ["supplies"], notes: "Weekly supplies" },
  { user_id: testUser[0], depositDate: "2021-03-18", amount: 150000, category: ["ingredients"], notes: "Weekly ingredients" },

  { user_id: testUser[0], depositDate: "2021-03-25", amount: 500000, category: ["wages"], notes: "bi-weekly wages for employees" },
  { user_id: testUser[0], depositDate: "2021-03-25", amount: 30000, category: ["supplies"], notes: "Weekly supplies" },
  { user_id: testUser[0], depositDate: "2021-03-25", amount: 150000, category: ["ingredients"], notes: "Weekly ingredients" },
  { user_id: testUser[0], depositDate: "2021-03-25", amount: 80000, category: ["bills", "electric"], notes: "monthly electric bill" },
  { user_id: testUser[0], depositDate: "2021-03-25", amount: 15000, category: ["bills", "gas"], notes: "monthly gas bill" },
  { user_id: testUser[0], depositDate: "2021-03-25", amount: 15000, category: ["bills", "phone"], notes: "monthly phone bill" },
  { user_id: testUser[0], depositDate: "2020-03-25", amount: 50000, category: ["bills", "property tax"], notes: "quarterly property tax" },

  //APRIL

  { user_id: testUser[0], depositDate: "2021-04-01", amount: 30000, category: ["supplies"], notes: "standard weekly supplies" },
  { user_id: testUser[0], depositDate: "2021-04-01", amount: 150000, category: ["ingredients"], notes: "Weekly ingredients" },

  { user_id: testUser[0], depositDate: "2021-04-08", amount: 500000, category: ["wages"], notes: "bi-weekly wages for employees" },
  { user_id: testUser[0], depositDate: "2021-04-08", amount: 30000, category: ["supplies"], notes: "Weekly supplies" },
  { user_id: testUser[0], depositDate: "2021-04-08", amount: 150000, category: ["ingredients"], notes: "Weekly ingredients" },

  { user_id: testUser[0], depositDate: "2021-04-15", amount: 30000, category: ["supplies"], notes: "Weekly supplies" },
  { user_id: testUser[0], depositDate: "2021-04-15", amount: 150000, category: ["ingredients"], notes: "Weekly ingredients" },

  { user_id: testUser[0], depositDate: "2021-04-22", amount: 500000, category: ["wages"], notes: "bi-weekly wages for employees" },
  { user_id: testUser[0], depositDate: "2021-04-22", amount: 30000, category: ["supplies"], notes: "Weekly supplies" },
  { user_id: testUser[0], depositDate: "2021-04-22", amount: 150000, category: ["ingredients"], notes: "Weekly ingredients" },

  { user_id: testUser[0], depositDate: "2021-04-22", amount: 30000, category: ["supplies"], notes: "Weekly supplies" },
  { user_id: testUser[0], depositDate: "2021-04-22", amount: 150000, category: ["ingredients"], notes: "Weekly ingredients" },
  { user_id: testUser[0], depositDate: "2021-04-29", amount: 80000, category: ["bills", "electric"], notes: "monthly electric bill" },
  { user_id: testUser[0], depositDate: "2021-04-29", amount: 15000, category: ["bills", "gas"], notes: "monthly gas bill" },
  { user_id: testUser[0], depositDate: "2021-04-29", amount: 15000, category: ["bills", "phone"], notes: "monthly phone bill" },
  { user_id: testUser[0], depositDate: "2020-04-29", amount: 110000, category: ["repair"], notes: "repair broken fridge" },


    //MAY
    { user_id: testUser[0], depositDate: "2021-05-06", amount: 500000, category: ["wages"], notes: "bi-weekly wages for employees" },
    { user_id: testUser[0], depositDate: "2021-05-06", amount: 30000, category: ["supplies"], notes: "standard weekly supplies" },
    { user_id: testUser[0], depositDate: "2021-05-06", amount: 150000, category: ["ingredients"], notes: "Weekly ingredients" },
  
    { user_id: testUser[0], depositDate: "2021-05-13", amount: 30000, category: ["supplies"], notes: "Weekly supplies" },
    { user_id: testUser[0], depositDate: "2021-05-13", amount: 150000, category: ["ingredients"], notes: "Weekly ingredients" },

    { user_id: testUser[0], depositDate: "2021-05-20", amount: 500000, category: ["wages"], notes: "bi-weekly wages for employees" },
    { user_id: testUser[0], depositDate: "2021-05-20", amount: 30000, category: ["supplies"], notes: "Weekly supplies" },
    { user_id: testUser[0], depositDate: "2021-05-20", amount: 150000, category: ["ingredients"], notes: "Weekly ingredients" },
  
    { user_id: testUser[0], depositDate: "2021-05-27", amount: 30000, category: ["supplies"], notes: "Weekly supplies" },
    { user_id: testUser[0], depositDate: "2021-05-27", amount: 150000, category: ["ingredients"], notes: "Weekly ingredients" },
    { user_id: testUser[0], depositDate: "2021-05-27", amount: 30000, category: ["supplies"], notes: "Weekly supplies" },
    { user_id: testUser[0], depositDate: "2021-05-27", amount: 80000, category: ["bills", "electric"], notes: "monthly electric bill" },
    { user_id: testUser[0], depositDate: "2021-05-27", amount: 15000, category: ["bills", "gas"], notes: "monthly gas bill" },
    { user_id: testUser[0], depositDate: "2021-05-27", amount: 15000, category: ["bills", "phone"], notes: "monthly phone bill" },


    { user_id: testUser[0], depositDate: "2021-05-28", amount: 30000, category: ["supplies"], notes: "Weekly supplies" },
    { user_id: testUser[0], depositDate: "2021-05-29", amount: 150000, category: ["ingredients"], notes: "Weekly ingredients" },
    { user_id: testUser[0], depositDate: "2021-05-30", amount: 30000, category: ["supplies"], notes: "Weekly supplies" },
    { user_id: testUser[0], depositDate: "2021-05-30", amount: 500000, category: ["wages"], notes: "bi-weekly wages for employees" },
    //JUNE

    { user_id: testUser[0], depositDate: "2021-06-03", amount: 30000, category: ["supplies"], notes: "Weekly supplies" },
    { user_id: testUser[0], depositDate: "2021-06-03", amount: 150000, category: ["ingredients"], notes: "Weekly ingredients" },

    { user_id: testUser[0], depositDate: "2021-06-9", amount: 500000, category: ["wages"], notes: "bi-weekly wages for employees" },
    { user_id: testUser[0], depositDate: "2021-06-10", amount: 30000, category: ["supplies"], notes: "Weekly supplies" },
    { user_id: testUser[0], depositDate: "2021-06-11", amount: 150000, category: ["ingredients"], notes: "Weekly ingredients" },
    { user_id: testUser[0], depositDate: "2021-06-12", amount: 135000, category: ["repair"], notes: "Sink plumbing repair" },
    { user_id: testUser[0], depositDate: "2021-06-14", amount: 20000, category: ["meeting"], notes: "Employee meeting lunch" },

    { user_id: testUser[0], depositDate: "2021-06-16", amount: 30000, category: ["supplies", "PPE"], notes: "PPE supplies" }, 
    

    // { user_id: testUser[0], depositDate: "2021-06-17", amount: 30000, category: ["supplies"], notes: "Weekly supplies" },
    // { user_id: testUser[0], depositDate: "2021-06-17", amount: 150000, category: ["ingredients"], notes: "Weekly ingredients" },
    // { user_id: testUser[0], depositDate: "2021-06-17", amount: 80000, category: ["bills", "electric"], notes: "monthly electric bill" },
    // { user_id: testUser[0], depositDate: "2021-06-17", amount: 15000, category: ["bills", "gas"], notes: "monthly gas bill" },
    // { user_id: testUser[0], depositDate: "2021-06-17", amount: 15000, category: ["bills", "phone"], notes: "monthly phone bill" }


];


module.exports = testExpense;