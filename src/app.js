const express = require("express");


const app = express();

app.use(express.json());

const movieControllers = require("./controllers/movieControllers");
const userControllers = require("./controllers/userControllers");

const validateUser = require("./middlewares/validateUser")
const validateMovie = require("./middlewares/validateMovie");

app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);

app.get("/api/users", userControllers.getUsers);
app.get("/api/users/:id", userControllers.getUsersById);

app.post("/api/movies", validateMovie, movieControllers.postMovie);
app.post("/api/users", validateUser, userControllers.postUsers);

app.put("/api/movies/:id", validateMovie, movieControllers.putMovieById);
app.put("/api/users/:id", validateUser, userControllers.putUsersById);

module.exports = app;
