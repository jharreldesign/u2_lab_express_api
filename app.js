const baseURL = "http://localhost:3001";

const fetchMovies = async () => {
  try {
    const response = await axios.get(`${baseURL}/movies`);
    const movies = response.data;
    const moviesDiv = document.getElementById('movies');

    movies.forEach(movie => {
      const movieItem = document.createElement('div');
      movieItem.classList.add('item');
      movieItem.innerHTML = `
      <strong>Title:</strong> ${movie.title} 
      <br> 
      <strong>Year:</strong> ${movie.releaseYear} 
      <br>
      <strong>Genre:</strong> ${movie.genre}
      <br>
      <strong>Studio:</strong> ${movie.studio}
      <br>
      <strong>Description:</strong> ${movie.description}`;
      moviesDiv.appendChild(movieItem);
    });

    console.log("Movies:", movies);
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};

const fetchActors = async () => {
  try {
    const response = await axios.get(`${baseURL}/actors`);
    const actors = response.data;
    const actorsDiv = document.getElementById('actors');

    actors.forEach(actor => {
      const actorItem = document.createElement('div');
      actorItem.classList.add('item');
      actorItem.innerHTML = `
      <strong>Name:</strong> ${actor.first_name} ${actor.last_name} 
      <br> 
      <strong>Age:</strong> ${actor.age}
      <br> 
      <strong>Last Movie:</strong> ${actor.lastMovie}`;
      actorsDiv.appendChild(actorItem);
    });

    console.log("Actors:", actors);
  } catch (error) {
    console.error("Error fetching actors:", error);
  }
};

const fetchReviews = async () => {
  try {
    const response = await axios.get(`${baseURL}/reviews`);
    const reviews = response.data;
    const reviewsDiv = document.getElementById('reviews');

    reviews.forEach(review => {
      const reviewItem = document.createElement('div');
      reviewItem.classList.add('item');
      reviewItem.innerHTML = `<strong>Rating:</strong> ${review.starRating} / 5 Stars <br> <strong>Review:</strong> ${review.content}
      <br> <strong>User Name:</strong> ${review.reviewedBy}`;
      reviewsDiv.appendChild(reviewItem);
    });

    console.log("Reviews:", reviews);
  } catch (error) {
    console.error("Error fetching reviews:", error);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  fetchMovies();
  fetchActors();
  fetchReviews();
});
