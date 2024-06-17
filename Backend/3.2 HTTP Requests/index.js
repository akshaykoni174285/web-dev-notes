import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
const port = 3000;

app.set('view engine', 'ejs')

app.set('views',path.join(__dirname, 'views'));


app.get('/', (req, res) => {
  res.render('index',{title: 'Welcome to this page',message:"how are you doing akshay"});
})

app.post('/contact',(req, res) => {
  res.send('<h1>Contact us</h1>');
})

app.get('/testing', (req, res) => {
  res.send('<h1>testing</h1>');
})
app.listen(port, () =>{
  console.log('server running on port ' + port);
})