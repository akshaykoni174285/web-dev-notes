import express from 'express';
import ejs from 'ejs';

var app = express();
var port = 3000


var date = new Date();
var greeting
function getDayHrs(req, res, next) {
    greeting = date.getHours()
    next();
}

app.use(getDayHrs);

app.set('view engine', 'ejs');
app.get('/', (req,res)=>{
    res.render('index',{greeting:date.getHours()%12})
})
app.listen(port, () =>{
    console.log('listening on port' + port);
})