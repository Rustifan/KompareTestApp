const express = require("express");
const cors = require("cors");
const mongoInit = require("./Mongo/mongoInit");
const usersRouter = require("./router/usersRouter");

//init
const port = 8000;
const app = express();
mongoInit();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


//routers
app.use("/api/users", usersRouter);


//listen
app.listen(port, ()=>console.log(`Listening on the port ${port}`));


