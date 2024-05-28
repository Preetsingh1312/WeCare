import express from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { dbconnection } from "./database/dbconnection.js";
import messageRouter from "./router/messageRouter.js"
import userRoter from "./router/userRoter.js";
import appointmentRouter from "./router/appointmentRouter.js";

import { errorMiddleware } from "./middlewares/erroeMiddleware.js";


const app=express();

const allowedOrigins = ["https://wecare-fvev.onrender.com","https://wecare-jxa9.onrender.com"];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));


config({path:"./config/config.env"});



app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(fileUpload({
  useTempFiles:true,
  tempFileDir:"/tmp/",
  })
);

app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRoter);
app.use("/api/v1/appointment", appointmentRouter);

dbconnection();

app.use(errorMiddleware);

export default app;


//mongodb+srv://dilpreet:dilpreet@cluster0.u5dxpeb.mongodb.net/?retryWrites=true