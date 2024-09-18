
const express = require("express");

const app = express();

app.get("/check", (req, res) => res.send(JSON.stringify({
    staus : "success",
    data : "App is Working!",
})));

app.get("/health", (req, res) => {
    res.json({
        status : "success",
        data : "App is Working",
    })
});