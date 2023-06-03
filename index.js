const express = require("express");
const { connection } = require("./config/db")
const { userRoute } = require("./config/route/userRoute")
const { itemRoute } = require("./config/route/postclassRoute");
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors())
app.use("/user", userRoute);
app.use("/item", itemRoute);







app.listen(process.env.port, async () => {
    try {
        await connection;
        console.log("Successfully connected to database");
    }
    catch (err) {
        console.log(err);
    }
    console.log(`Server is running on port ${process.env.port}`)
})