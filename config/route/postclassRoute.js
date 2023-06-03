const express = require("express");
const { ItemModel } = require("../model/item")

const itemRoute = express.Router();

itemRoute.post("/addItem", async (req, res) => {
    try {
        let data = await ItemModel.insertMany(req.body);
        res.send({ "msg": "Item added successfully", "data": data });
    }
    catch (err) {
        res.send(err);
    }
})

itemRoute.get("/allitem", async (req, res) => {
    try {
        let data = await ItemModel.find();
        res.send(data);
    }
    catch (err) {
        res.send(err);
    }
})




module.exports = { itemRoute };