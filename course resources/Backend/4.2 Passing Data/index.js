import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs",);
});

app.post("/submit", (req, res) => {
  var name = req.body["fName"] + req.body["lName"];
  const nameLen = name.length;
  res.render("index.ejs",
  {
    nameLen : name.length,
    string : `There are ${nameLen} letters in your name.`
  }
  );
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
