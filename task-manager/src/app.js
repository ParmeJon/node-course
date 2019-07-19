const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();

// parses incoming json so we have it accessible as an object
app.use(express.json());

app.use(userRouter);
app.use(taskRouter);

module.exports = app
