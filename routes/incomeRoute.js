const express = require("express");
const {
  createNewIncome,
  getIncome,
  getIncomeDateBased,
  deleteIncome,
} = require("../controllers/incomeController");
const verifyUser = require("../middleware/authMiddleware");

const router = express();

// route = /api/income/new
// to create new expense

router.post("/new", verifyUser, createNewIncome);

// to fetch the expense
// route = /api/income/

router.get("/:type", verifyUser, getIncome);

// to fetch the expense based on date
// route = /api/income/?startDate=&endDate=
// in body pass startDate and endDate as parameter

router.get("/", verifyUser, getIncomeDateBased);

// to delete the expense

router.delete("/:id", verifyUser, deleteIncome);

module.exports = router;
