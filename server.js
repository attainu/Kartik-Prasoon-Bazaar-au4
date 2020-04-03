const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");

// Route
const users = require("./routes/api/users");

const app = express();

const mongoose = require("./config/mongo-database");

// body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Hello World"));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Use Route
app.use("/api/users", users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
