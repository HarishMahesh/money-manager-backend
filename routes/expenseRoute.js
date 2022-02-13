const express = require("express");
const {
  createNewExpense,
  getExpense,
  getExpenseDateBased,
  deleteExpense,
} = require("../controllers/expenseController");
const verifyUser = require("../middleware/authMiddleware");

let router = express();

// route = /api/expenses/new
// to create new expense

router.post("/new", verifyUser, createNewExpense);

// to fetch the expense
// route = /api/:type
// in body pass type parameter as week or month or year or all for different types

router.get("/:type", verifyUser, getExpense);

// to fetch the expense based on date
// route = /api/expenses?startDate=&endDate=
// in body pass startDate and endDate as parameter

router.get("/", verifyUser, getExpenseDateBased);

// to delete the expense

router.delete("/:id", verifyUser, deleteExpense);

module.exports = router;
