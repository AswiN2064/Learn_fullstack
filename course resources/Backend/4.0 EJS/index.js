import express from "express";

const app = express();
const port  = 5000;

app.get("/", (req,res) =>{

    const today = new Date();
    const day = today.getDay();

    // console.log(day);
    let type = "a weekday";
    let advice = "unakku enna daa inga vela poi padi daa"

    if (day === 0 || day === 6){
        type = "a weekend";
        advice = "irunthalum paravala poi padi"
    }

    res.render("index.ejs", {dayType : type, advice: advice});
})


app.listen(port, () => {
    console.log(`server running on the port: ${port}`);
});