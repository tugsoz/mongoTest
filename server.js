import userRouter from "./routers/userRouter.js";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import chalk from "chalk";
import {} from "dotenv/config"
import bodyParser from "body-parser"

const app = express();
const port = process.env.PORT;
const mongodb_url = process.env.MONGODB_URL;
const connected = chalk.red.bold;

app.use(cors());
app.use(bodyParser());
app.use(express({limit:'30mb', extended: true}));

app.use("/users", userRouter)

mongoose.connection.on("connected", () => {
    console.log(connected("Mongoose connected"))
});

mongoose.connection.on("error", (e) => {
    console.log(e)
});
mongoose.connect(mongodb_url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> app.listen(port, console.log(`http://localhost:${port}`)))