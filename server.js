const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");

// Route
const users = require("./routes/api/users");
const products = require("./routes/api/product");

const app = express();

const mongoose = require("./config/mongo-database");
//const postDb = require("./config/postgres-database");

// body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Use Route
app.use("/api/users", users);
app.use("/api/products", products);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
