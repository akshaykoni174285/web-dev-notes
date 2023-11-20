import express from 'express';
import ejs from 'ejs';
import fs from 'fs';



const app = express();
const port = 3000;
const currentDate = new Date();
// var day = currentDate.getDay();
var day = 4;
var advice = "";

function getAdvice(req, res, next) {
    if (day < 6){
        advice = "its time to work";

    }
    else{
        advice = "its time to enjoy";
    }
    next();
    

}

app.use(getAdvice);

app.get("/", (req, res) => {
    
    res.render("index.ejs", {
        dateType: `${day}`,
        advice: `${advice}`,
    });
    // console.log(day);
})



app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
})