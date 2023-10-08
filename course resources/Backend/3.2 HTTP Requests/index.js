import express from "express";
const app = express();
const port =  3000;

app.get("/", (req, res) => {
    res.send("Hello..!");
});

app.get("/Contact", (req, res) => {
    res.send("<h1>Contact</h1>");
});

app.get("/About_me", (req, res) => {
    res.send("<h1>About_me</h1>");
});

app.listen(port,()=>{
    console.log("server is connected to the port "+port);
});