// In order to reseed the database, simply run node db.js on this directory which will empty all collections and reseed after
const testDeposit = require('./deposit_seeds')
const testExpense = require('./expense_seeds')
const testUser = require('./user_seeds');


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/accountDB', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});


// Database schemas - Will need to add more specifcs (required, make arrays only strings, etc)
const userSchema = new mongoose.Schema({
  username: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  }
});


const depositSchema = new mongoose.Schema({
  user_id: userSchema,
  
  depositDate: {
    type: Date
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
    type: Date
  },

  amount: {
    type: Number
  },

  category: {
    type: Array
  },

  notes: String
});

const receiptSchema = new mongoose.Schema({
  data: {
    type: String
  },

  dateCaptured: {
    type: Date
  },


  notes: {
    type: String
  }
});

// Creating the collections
const Deposit = mongoose.model("Deposit", depositSchema)
const Expense = mongoose.model("Expense", expenseSchema)
const User = mongoose.model("User", userSchema)
const Receipt = mongoose.model("Receipt", receiptSchema)

// This deletes entire collection.

const dbReset = async () => {
  await Deposit.deleteMany({}, function(err){
    if (err) {
      console.log(err);
    } else {
      console.log("Past deposits has been Successfully Deleted!");
      // Seeding the deposits collection
      Deposit.insertMany(testDeposit,
        function(err) {
            if (err) {
              console.log(err);
            } else {
              console.log("Successfully saved all the deposits");
            }}
      )
    }
  });
  
  await Expense.deleteMany({}, function(err){
    if (err) {
      console.log(err);
    } else {
      console.log("Past expenses has been Successfully Deleted!");
      // Seeding the expenses collection
      Expense.insertMany(testExpense,
        function(err) {
            if (err) {
              console.log(err);
            } else {
              console.log("Successfully saved all the expenses");
            }}
      )
    }
  });
  
  await Receipt.deleteMany({}, function(err){
    if (err) {
      console.log(err);
    } else {
      console.log("Past receipts has been Successfully Deleted!");
    }
  });

  await User.deleteMany({}, function(err){
    if (err) {
      console.log(err);
    } else {
      console.log("Past users has been Successfully Deleted!");
      // Seeding the expenses collection
      User.insertMany(testUser,
        function(err) {
            if (err) {
              console.log(err);
            } else {
              console.log("Successfully saved all the users");
            }}
      )
    }
  });
  mongoose.connection.close();
}


module.exports = { Deposit, Expense, User, Receipt, dbReset };




