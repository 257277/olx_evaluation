const express = require("express");
const { UserModel } = require("../model/user");
const { hashing } = require("../middleware/bcrypt");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require("dotenv").config();
const userRoute = express.Router();

userRoute.post("/login", async (req, res) => {
    let { email, password } = req.body;
    try {
        let user = await UserModel.find({ email });
        if (user.length > 0) {
            bcrypt.compare(password, user[0].password, function (err, result) {
                if (err) {
                    res.send("Invalid Credentials");
                }
                else {
                    let token = jwt.sign({ userid: user[0]._id }, process.env.secret_key);
                    res.send({ "msg": "Login Successful", "token": token })
                }
            });
        }
        else {
            res.send("Invalid Credentials");
        }
    }
    catch (err) {
        res.send(err);
    }
})

userRoute.use(hashing);
userRoute.post("/signup", async (req, res) => {
    let { email, password } = req.body;
    try {
        let user = await UserModel.find({ email });
        if (user.length == 0) {
            let data = await UserModel.insertMany(req.body);
            res.send({ "msg": "Registration successfully completed!", "data": data });
        }
        else {
            res.send("User already registered")
        }
    }
    catch (err) {
        res.send(err);
    }
})


module.exports = {
    userRoute
}