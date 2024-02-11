require("dotenv").config();
const express = require("express");
const app = express();
const router = require('./routes/routes')
const bodyParser = require("body-parser");
const sequelize = require("./db");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 8000;

app.use("/", router);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Internal Server Error");
});

app.listen(PORT, () => {
  console.log("Server successfully started at port ", PORT);
});
