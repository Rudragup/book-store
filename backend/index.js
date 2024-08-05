import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import bookRoute from "./routes/book.route.js";
const app = express();
dotenv.config();

const port=process.env.PORT ||3000;
const URI=process.env.MONGODBURI;

mongoose.connect(URI)
.then(()=>{
    console.log("Connected to MongoDB");
})
 .catch((err) => console.log(err));


 app.use("/book", bookRoute);

app.listen(port, (req, res) => {
    
console.log(`server listening on ${port}`);
})