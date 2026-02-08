import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    res.json([
        { id: 1, name: "T-Shirt", price: 1200 },
        { id: 2, name: "Shoes", price: 3500 }
    ]);
});

export default router;
