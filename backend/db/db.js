// In order to reseed the database, simply run node db.js on this directory which will empty all collections and reseed after

const testDeposit = require('./deposit_seeds')
const testExpense = require('./expense_seeds')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/accountDB', {useNewUrlParser: true, useUnifiedTopology: true, userFindAndModify: false});


// Database schemas - Will need to add more specifcs (required, make arrays only strings, etc)
const userSchema = new mongoose.Schema({
  username: {
    type: String
  },

  password: {
    type: String
  }
});


const depositSchema = new mongoose.Schema({
  user_id: userSchema,
  
  depositDate: {
    type: String
  },

  amount: {
    type: Number
  },

  category: {
    type: Array
  },

  notes: String
});


const expenseSchema = new mongoose.Schema({
  user_id: userSchema,
  
  depositDate: {
    type: String
  },

  amount: {
    type: Number
  },

  category: {
    type: Array
  },

  notes: String
});


// Creating the collections
const Deposit = mongoose.model("Deposit", depositSchema)
const Expense = mongoose.model("Expense", expenseSchema)
const User = mongoose.model("User", userSchema)

// This deletes entire collection. Runs everytime node db.js is run
Deposit.deleteMany({}, function(err){
  if (err) {
    console.log(err);
  } else {
    console.log("Document has been Successfully Deleted!");
  }
});

Expense.deleteMany({}, function(err){
  if (err) {
    console.log(err);
  } else {
    console.log("Document has been Successfully Deleted!");
  }
});

// Creating the test user Saitama
const testUser = new User({
  username: "Saitama",
  password: "asdf"
})


// Seeding the deposits and expenes collections
Deposit.insertMany(testDeposit,
  function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Successfully saved all the deposits");
      }}
)

Expense.insertMany(testExpense,
  function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Successfully saved all the expenses");
      }}
)


///////////////////////
//// CRUD TUTORIAL ////
///////////////////////

////////////////////////////////////////

// CREATE


// const test_expense = new Expense ({
//   user_id: testUser,
//   depositDate: "2021-01-05",
//   amount: 50,
//   category: ["PPE, supplies"],
//   notes: "Buying masks for employees"
// })

// test_expense.save();

// SEE how database was weeded for insertMany if you have more than one to add

/////////////////////////////////////////////////////////////////

// READ
// You will probably use the most for making charts so I will give a lot of examples for this
// Lets return the deposit elements which have "subsidy" in category, even if it has multiple categories

// Deposit.find(function(err, deposits){
//   if (err) { console.log(err) }
//   else {
//     deposits.forEach(eachDeposit => {
//       if (eachDeposit.category.includes("subsidy")) {
//         console.log(eachDeposit)
//       }
//     })
//   }
// })


//////////////////////////////////////////////////////////////////

//UPDATE
// Each expense/deposit item is given a unique long random object ID when seeded so this number will vary
// You need to make reference to this unique ID and change it accordingly
// In this example, I'm updating the category

// Expense.updateOne({_id: "60bd9461a9d72f4cdcd2baf7"}, {category: ["derp"]}, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully updated to derp");
//   }} )

///////////////////////////////////////////////////////////////////

//DELETE

//This is pretty standard just like update

// Expense.deleteOne({_id: "60bd9461a9d72f4cdcd2baf7"}, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully updated to derp");
//   }} )


/////////////////////////////





