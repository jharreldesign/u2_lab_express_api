const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const db = require("./db");
const { Movie } = require("./models");
const { Actor } = require("./models");
const { Review } = require("./models");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is root!");
});

app.get("/movies", async (req, res) => {
  const movies = await Movie.find({});
  res.json(movies);
});

app.get("/actors", async (req, res) => {
  const actors = await Actor.find({});
  res.json(actors);
});

app.get("/reviews", async (req, res) => {
  const reviews = await Review.find({});
  res.json(reviews);
});

app.get("/reviews/:id", async (req, res) => {
  const review = await Review.findById(req.params.id);
  if (!review) {
    return res.status(404).send("Review not found");
  }
  res.json(review);
});

app.get("/movies/:id", async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
        return res.status(404).send("Review not found");
    }
    res.json(movie)
})

app.get("/actors/:id", async (req, res) => {
    const actor = await Actor.findById(req.params.id);
    if (!actor) {
        return res.status(404).send("Actor not found");
    }
    res.json(actor)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
