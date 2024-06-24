import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

app.set('view engine', 'ejs')

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "akshay25102001";
const yourPassword = "akshay25102001";
const yourAPIKey = "e983fdfe-9bcd-4449-b50e-bc037fed735d";
const yourBearerToken = "";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
});

app.get("/basicAuth", (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */

    axios.get(API_URL+'all', {
      auth: {
        username: yourUsername,
        password: yourPassword
      }
    })
    .then(response =>{
      console.log(response.data);
      res.render('index',{content : JSON.stringify(response.data[0])});
    })
});

app.get("/apiKey", (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
});

app.get("/bearerToken", (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
  axios
    .get(API_URL+'secrets/2', {
      headers: {
        Authorization: `Bearer 53668f06-2464-4441-9ca3-5ceda4566569`
      }
    })
    .then(response =>{
      res.render('index',{content: JSON.stringify(response.data)})

    })
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
