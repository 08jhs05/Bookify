const { Deposit, Expense, User } = require('./db');
const db = require('./db');

const getDepositsAfterDate = async (req, res) => {
    await Deposit.find({ depositDate: { $gt : new Date(req.query.queryDate) } }, (err, deposits) => {
      if (err) {
          return res.status(400).json({ success: false, error: err })
      }
      if (!deposits.length) {
          return res
              .status(404)
              .json({ success: false, error: `Deposit not found` })
      }
      return res.status(200).json(deposits)
  }).catch(err => console.log(err))
}

const getExpensesAfterDate = async (req, res) => {
    await Expense.find({ depositDate: { $gt : new Date(req.query.queryDate) } }, (err, expenses) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!expenses.length) {
            return res
                .status(404)
                .json({ success: false, error: `Expense not found` })
        }
        return res.status(200).json(expenses)
    }).catch(err => console.log(err))
}

const submitNewExpense = async (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Data cannot be empty',
        })
    }

    const newExpense = new Expense(body)

    if (!newExpense) {
        return res.status(400).json({ success: false, error: err })
    }

    newExpense
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                message: 'Expense created',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Expense not created',
            })
        })
}


const submitNewDeposit = async (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Data cannot be empty',
        })
    }

    const newDeposit = new Deposit(body)

    if (!newDeposit) {
        return res.status(400).json({ success: false, error: err })
    }

    newDeposit
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                message: 'Deposit created',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Deposit not created',
            })
        })
}

module.exports = { getDepositsAfterDate, getExpensesAfterDate, submitNewExpense, submitNewDeposit };
