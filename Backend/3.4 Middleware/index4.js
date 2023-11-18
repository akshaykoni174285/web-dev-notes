import bodyParser from "body-parser";
import express from "express";
import morgan from "morgan";

import { dirname } from "path";
import { fileURLToPath } from "url";
// impor bodyParser



const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
// use your own middleware

app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("tiny"));

function bandNameGen(req, res, next) {
  console.log(req.body);
  var bandName = req.body['street'] + req.body['pet'];
  next();
}
app.use(bandNameGen);

app.post('/submit', (req, res) => {
  res.send(`<h1>the name of the band is ${bandName}</h1>`)
  console.log(req.body);
})
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
