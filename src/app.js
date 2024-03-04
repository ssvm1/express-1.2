const express = require("express");
const expressValidator = require("./middlewares/expressValidator");


const app = express();

app.use(express.json());

const movieControllers = require("./controllers/movieControllers");
const userControllers = require("./controllers/userControllers");

app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);

app.get("/api/users", userControllers.getUsers);
app.get("/api/users/:id", userControllers.getUsersById);

app.post("/api/movies", expressValidator, movieControllers.postMovie);
app.post("/api/users", expressValidator, userControllers.postUsers);

app.put("/api/movies/:id", expressValidator, movieControllers.putMovieById);
app.put("/api/users/:id", expressValidator, userControllers.putUsersById);

module.exports = app;
