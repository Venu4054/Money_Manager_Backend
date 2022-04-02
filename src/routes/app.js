const express = require("express");
const dotenv=require("dotenv");
const dbConnect = require("../config/dbConnect");
const { errHandler,notFound } = require("../middleware/errmiddleware");
const userRoute = require("./users/userRoutes");
const app = express();




dotenv.config();

//dbConnect
dbConnect();

//middleWares
app.use(express.json());

//routes
app.use("/",userRoute);


app.use(notFound);
//Error
app.use(errHandler);




module.exports = app;



