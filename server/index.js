const express = require("express");
const cors = require("cors");
const mongoInit = require("./Mongo/mongoInit");
const usersRouter = require("./router/usersRouter");
const handleErrors = require("./errors/handleErrors");
const ExpressError = require("./errors/ExpressError");
require('dotenv').config();

//init
const port = process.env.PORT || 8000;
const app = express();
mongoInit();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


//routers
app.use("/api/users", usersRouter);

//handle not found
app.use("/", (req, res)=>{throw(new ExpressError("Page not found", 404))});

//handle error
app.use(handleErrors);

//listen
app.listen(port, ()=>console.log(`Listening on the port ${port}`));


