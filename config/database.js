// config/database.js
const mongoose = require('mongoose');

const connectDB = () => {
  mongoose.connect("mongodb://127.0.0.1:27017/assignment_portal");

  mongoose.connection
    .once("open", () => {
      console.log("Connected to DB.....");
    })
    .on("error", (error) => {
      console.log("Problem connecting to DB..!!!!!");
      console.error(error);
    });
};

module.exports = { connectDB };

// The rest of the code remains the same...