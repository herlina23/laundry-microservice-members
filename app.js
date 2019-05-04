const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const autoIncrement = require("mongoose-auto-increment");

const app = express();

app.use(cors());

//Environtment Variables
require("dotenv").config();

//Connect to Database
require("./config/db");

autoIncrement.initialize(mongoose.connection);

app.use(express.json());

app.use("/api/v1/members", require("./routes/members"));
app.use("/api/v1/mreports", require("./routes/mreports"));
app.use("/api/v1/dreports", require("./routes/dreports"));

const PORT = process.env.PORT || 3004;
app.listen(PORT, console.log(`Server started on Port ${PORT}`));
