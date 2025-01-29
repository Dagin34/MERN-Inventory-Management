//.. Entry point of our database
//.. const express = require("express"); //.. Older syntax
import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import path from "path";

import productRoutes from './routes/product.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5200;

const __dirname = path.resolve();

//.. Allows us to accept JSON data in the req.body
app.use(express.json());

//.. Rod to the root folder
// app.get("/", (req, res) => {
//     res.send("Root page called!")
// })


//.. Route to all the products
app.use("/api/products", productRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
    })
}


//.. Listening to the port 5200
app.listen(PORT, () => {
    connectDB();
    console.log("Server started - http://localhost:" + PORT);
})

