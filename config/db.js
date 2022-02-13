const mongoose = require("mongoose");

let DB_URL =
  "mongodb+srv://harish:harish1923@cluster0.xu2gr.mongodb.net/moneyTracker";

const connectToBb = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongo db connected");
  } catch (err) {
    console.log("Mongo db connection failed");
  }
};

module.exports = connectToBb;
