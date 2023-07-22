const mongoose = require("mongoose");
require("dotenv").config();
const url = process.env.db_url;
exports.db_connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connect");
    })
    .catch((error) => {
      console.log("not connect");
      process.exit(1);
    });
};
