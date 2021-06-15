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
// You will probably use the most for making charts so I will work on more examples for this
// Lets return the deposit elements which have "subsidy" in category, even if it has multiple categories

// Gets categories

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


// Checks for deposits after April

// Deposit.find(function(err, deposits){
//   if (err) { console.log(err) }
//   else {
//     deposits.forEach(eachDeposit => {
//       if (eachDeposit.depositDate > "2021-04-01") {
//         console.log(eachDeposit.depositDate)
//       }
//     })
//   }
// })



// Sum of all deposits for month of march

// testDeposit.forEach(eachDeposit => {
//   if ((eachDeposit.depositDate > "2021-02-28") && (eachDeposit.depositDate < "2021-04-01")) {
//          marchDeposit += eachDeposit.amount/100
//    }})


//////////////////////////////////////////////////////////////////

//UPDATE
// Each expense/deposit item is given a unique long random object ID when seeded so this number will vary
// You need to make reference to this unique ID and change it accordingly
// In this example, I'm updating the category

// Expense.updateOne({_id: "60be7329ad6416269437e092"}, {category: ["derp"], poop: "lol"}, function(err) {
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





