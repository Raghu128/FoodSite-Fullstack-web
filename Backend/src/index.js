import connectDB from "./DB/connection.js";
import express from "express";
import data from "./routes/data.js";
import cors from "cors";
import bodyParser from "body-parser";
import signUpRouter from "./routes/signUp.js";
import loginRouter from "./routes/login.js";
import cookieParser from "cookie-parser";
import isLoginRouter from './routes/isLogin.js'
import logoutRouter from './routes/logout.js'

const corsOptions = {
  origin: "http://localhost:3001",
  credentials: true,
};
connectDB();
const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

app.use('/api/isLogin', isLoginRouter);
app.use('/api/logout', logoutRouter);
app.use("/api/data", data);
app.use("/api/signUp", signUpRouter);
app.use("/api/login", loginRouter);

app.listen(3000, () => {
  console.log("app is running at http://localhost:3000");
});
