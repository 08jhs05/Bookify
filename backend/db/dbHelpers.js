const { Deposit, Expense, User } = require('./db');

getDepositsAfterDate = async (req, res) => {
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

getExpensesAfterDate = async (req, res) => {
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

module.exports = { getDepositsAfterDate, getExpensesAfterDate };