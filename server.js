import express from "express";
import axios from "axios";

const app = express();
const port = process.env.PORT || 4000;

const API_KEY = "8b8b82fe85fa47258d54d2a5f7da997a";
const API_URL_EVERYTHING = "https://newsapi.org/v2/everything?q=";
const API_URL_TOP_HEADLINES = "https://newsapi.org/v2/top-headlines";

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/everything/:query", (req, res) => {
  const url = `${API_URL_EVERYTHING}${req.params.query}&apiKey=${API_KEY}`;
  axios
    .get(url)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/top-headlines", (req, res) => {
  const { q, country } = req.query;
  const url = `${API_URL_TOP_HEADLINES}?q=${q}&country=${country}&apiKey=${API_KEY}`;
  axios
    .get(url)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});
