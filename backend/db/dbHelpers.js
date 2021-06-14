const { Deposit, Expense, User, Receipt } = require('./db');
const db = require('./db');
const https = require("https");



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

const getAllReceipts = async (req, res) => {
    await Receipt.find({ dateCaptured: {$gte : new Date(req.query.starts), $lte : new Date(req.query.ends)}}, (err, receipt) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!receipt.length) {
            return res
                .status(200)
                .json([])
        }
        return res.status(200).json(receipt)
    }).catch(err => console.log(err))
}

const getAllUsers = async (req, res) => {
    await User.find({}, {email: 1, password: 1, username: 1}, (err, users) => {
        if (err) {
            return res.status(400).json({success: false, error: err})
        } 
        if (!users.length) {
            return res.status(400).json({ success: false, error: 'Users not found'})
        }
        return res.status(200).json(users)
    }).catch(err => console.error(err));
};

const submitNewExpense = async (req, res) => {
    const body = {
        ...req.body,
        amount: formatCurrencyForDB(req.body.amount)
    };

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
    
    const body = {
        ...req.body,
        amount: formatCurrencyForDB(req.body.amount)
    };

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

const submitNewReceipt = async (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Data cannot be empty',
        })
    }

    const newReceipt = new Receipt(body)

    if (!newReceipt) {
        return res.status(400).json({ success: false, error: err })
    }

    newReceipt
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                message: 'Receipt created',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Receipt not created',
            })
        })
}

const deleteExpense = async (req, res) => {
    await Expense.deleteOne({ _id: req.query.id }, (err, expense) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!expense) {
            return res
                .status(404)
                .json({ success: false, error: `data not found` })
        }

        return res.status(200).json(expense);
    }).catch(err => console.log(err))
}

const deleteDeposit = async (req, res) => {
    await Deposit.deleteOne({ _id: req.query.id }, (err, deposit) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!deposit) {
            return res
                .status(404)
                .json({ success: false, error: `data not found` })
        }

        return res.status(200).json(deposit);
    }).catch(err => console.log(err))
}

const uploadToAPI = (res, filePath) => {
    const postBody = {
        image: filePath,
        filename: "example.jpeg",
        contentType: "image/jpeg",
        refresh: false,
        incognito: false,
        ipaddress: "32.4.2.223",
        ignoreMerchantName: "string",
        language: "en",
        extractTime: false,
        subAccountId: "string",
        referenceId: "string",
    };
    const internals = {
        hostname: "api.taggun.io",
        path: "/api/receipt/v1/simple/encoded",
        method: "POST",
        agent: https.Agent({ keepAlive: true }),
        port: 443,
        body: JSON.stringify(postBody),
        headers: {
        "Content-Type": "application/json",
        apikey: process.env.TaggunAPIKey,
        },
    };
    const req = https.request(internals, (result) => {
        result.on("data", (d) => {
        process.stdout.write(d);
        res.json(d.toString());
        });
    });

    req.on("error", (error) => {
        console.log(error);
    });
    req.write(JSON.stringify(postBody));
    req.end();
};

const formatCurrencyForDB = (value) => {
    return value * 100;
}
module.exports = { getDepositsAfterDate, getExpensesAfterDate, getAllUsers, submitNewExpense, submitNewDeposit, submitNewReceipt, deleteExpense, deleteDeposit, getAllReceipts, uploadToAPI };
