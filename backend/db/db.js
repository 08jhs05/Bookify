// import testDeposit from './deposit_seeds'
// import testExpense from './deposit_seeds'
const testDeposit = require('./deposit_seeds')
const testExpense = require('./expense_seeds')

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/accountDB', {useNewUrlParser: true, useUnifiedTopology: true, userFindAndModify: false});

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


/////////////////////
const Deposit = mongoose.model("Deposit", depositSchema)
const Expense = mongoose.model("Expense", expenseSchema)
const User = mongoose.model("User", userSchema)

// This deletes entire collection
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


const testUser = new User({
  username: "Saitama",
  password: "asdf"
})



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

module.exports = { Deposit, Expense, User };

// const test_expense = new Expense ({
//   user_id: testUser,
//   depositDate: "2021-01-05",
//   amount: 50,
//   category: ["PPE, supplies"],
//   notes: "Buying masks for employees"
// })




/////////////////////////////

// test_expense.save();

//testUser.save();

// const test_deposit = new Deposit ({
//   user_id: testUser,
//   depositDate: "2021-01-02",
//   amount: 203,
//   category: ["subsidy"],
//   notes: "Subsidy from Federal Government"
// })



// test_deposit.save();




// Deposit.insertMany([
//   {
//     user_id: testUser,
//     depositDate: "2021-01-02",
//     amount: 203,
//     category: ["subsidy"],
//     notes: "Subsidy from Federal Government"
//   },
//   {
//     user_id: testUser,
//     depositDate: "2021-01-03",
//     amount: 400,
//     category: ["uber"],
//     notes: "Uber eats weekly"
//   }
//   ],
//   function(err) {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("Successfully saved all the deposits");
//       }}
// )




// User.updateOne({password: "asdf"}, {username: "Saitama"}, function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("The document John was Successfully Updated");
//   }
// });


// Deposit.deleteOne({category: ["subsidy"]}, function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Document has been Successfully Deleted!");
//   }
// });






