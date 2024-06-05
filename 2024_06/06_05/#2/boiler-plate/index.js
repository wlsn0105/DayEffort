const express = require("express");
const app = express();
const port = 4000;

const mongoose = require("mongoose");
mongoose
    .connect(
        "mongodb+srv://zinu:9692@nodereacttolearn.so8ghj9.mongodb.net/?retryWrites=true&w=majority&appName=NodeReactToLearn",
        {}
    )
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
