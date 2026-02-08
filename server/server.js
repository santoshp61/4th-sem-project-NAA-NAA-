const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const productRoutes = require("./Routes/productRoutes");

const app = express();

// Middleware
app.use(cors({
    origin: "http://localhost:5173"
}));
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);

// Test Route
app.get("/", (req, res) => {
    res.send("E-commerce backend is running");
});

// Port
const PORT = process.env.PORT || 5000;

// MongoDB Connect
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected");
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((err) => console.log(err));
