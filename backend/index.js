const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser');
const userRouter = require("./Router/UserR");


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());
const port = 8001;

app.get("/", cors(), (req, res) => {
    res.send("Welcome to your movie application!");
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/TaskGuru')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
    })

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

app.use(userRouter)
// app.use("/")