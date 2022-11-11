const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const mongoose = require("mongoose");
const router = require("./router/router.js")
require("dotenv").config();

PORT = process.env.PORT || 3000
const app = express();
app.use(express.json());



//connection
mongoose.connect(process.env.MONGO_URL).then((res) => { console.log("connected to database") }).catch((err) => {
    console.log(err)
})

//middleware
app.use("/api", router);
app.use(morgan("common"));
app.use(helmet());


app.listen(PORT, () => {
    console.log(`server is running in port number ${PORT}`);
})