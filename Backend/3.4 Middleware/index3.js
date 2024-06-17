import express from "express";

const app = express();
const port = 3000;

function logger(req, res, next) {
    console.log("the method used is ",req.method);
    console.log("the url is ", req.url);
    next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
