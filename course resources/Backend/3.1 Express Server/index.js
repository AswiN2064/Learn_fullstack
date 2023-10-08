import express from "express";
const app = express();

const portNumber = 3000;

app.listen(portNumber, () => {
    console.log('server is running on the port '+portNumber+".");
});
