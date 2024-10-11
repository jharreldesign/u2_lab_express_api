const db = require('./db');
const { Actor, Movie, Review } = require('./models')

// ------------ SORT -------------- //

const reviewsSorted = async (order = 'asc') => {
    const sortOrder = order === 'asc' ? 1 : -1;
    const reviews = await Review.find().sort({ createdAt: sortOrder })

    console.log(reviews);
}

const moviesReleaseOrder = async (order = 'releaseDate') => {
    const sortOrder = order === 'asc' ? 1 : -1;
    const movies = await Movie.find().sort({ releaseYear: sortOrder })

    console.log(movies)
}

// ------------ ERRORS ------------- //
const findActorById = async (id) => {
    try {
        const actor = await Actor.findById(id);
        if (!actor) {
            console.log(`Actor with ID ${id} not found`);
            return;
        }
        console.log("Actor found: ", actor);
    } catch (err) {
        console.error("Error searching for actor: ", err.message);
    }
}

const findMovieById = async (id) => {
    try {
        const movie = await Movie.findById(id);
        if (!movie) {
            console.log(`Movie with ID ${id} not found`);
            return;
        }
        console.log("Movie Found: ", movie);
    } catch (err) {
        console.log("Error searching for movie: "), err.message;
    }
}

const findReviewById = async (id) => {
    try {
        const review = await Review.findById(id);
        if (!review) {
            console.log(`Review with ID ${id} not found`);
            return;
        }
        console.log("Review Found: ", review);
    } catch(err) {
        console.log("Error searching for movie: "), err.message;
    }
}

// ------------ CRUD -------------- //

// ------------ CREATE ----------- //

const createReview = async () => {
    const reviews = await Review.create({
        movieReviewed: "Longlegs",
        content: "Longlegs is a beautifully crafted story that intertwines humor and poignancy, showcasing the complexities of human relationships. The characters are vividly drawn, making their journeys both relatable and deeply engaging.",
        starRating: 4,
        reviewedBy: "That stranger"
    })
}

const createMovie = async () => {
    const movieReview = await Review.findOne({ movieReviewed: 'Longlegs'})
    const movies = await Movie.create({
        title: "Longlegs",
        releaseYear: 2024,
        runtimeInMinutes: 141,
        genre: ["Psychological Horror", "Serial Killer", "Supernatural Horror"],
        studio: "C2 Motion Picture Group",
        description: "In pursuit of a serial killer, an FBI agent uncovers a series of occult clues that she must solve to end his terrifying killing spree.",
        review: movieReview._id
    })
}

const createActor = async () => {
    const newMovie = await Movie.findOne({title: "Longlegs"})
    const actors = await Actor.create({
        first_name: "Maika",
        last_name: "Monroe",
        age: 31,
        isAlive: true,
        lastMovie: newMovie._id
    })

    console.log("Actor created: ", actors)
}

// ------------ READ ------------- //

const findAllMovies = async () => {
    const movies = await Movie.find();
    console.log('All Movies: ', movies)
}

const findAllActors = async () => {
    const actors = await Actor.find();
    console.log('All Actors: ', actors)
}

const findAllReviews = async () => {
    const reviews = await Review.find();
    console.log('All Reviews: ', reviews)
}

// ------------ UPDATE ----------- //

const updateMovie = async () => {
    const movies = await Movie.updateOne(
        { title: "A Quiet Place" }, //Current item you want to change (title, releasedate, etc.)
        { title: "Longlegs" } // What you want to change it to
    )
    console.log(movies)
}

const updateActor = async () => {
    const actors = await Actor.updateOne(
        {},
        {}
    )
    console.log(actors)
}

const updateReview = async () => {
    const reviews = await Review.updateOne(
        {},
        {}
    )
    console.log(reviews)
}


// ------------ DELETE ----------- //

const deleteOneMovie = async () => {
    const movies = await Movie.deleteOne({name: ""});
    console.log('Deleted Movie');
}

const deleteOneActor = async () => {
    const actors = await Actor.deleteOne({});
    console.log('Deleted Actor')
}

const deleteOneReview = async () => {
    const reviews = await Review.deleteOne({});
    console.log('Deleted Review')
}

// -------------------------------//
async function main () {
    try {

        // await reviewsSorted('asc');
        // await reviewsSorted('dsc');

        // await findActorById("609e12c8d3f0a33a84d1b888");
        // await findMovieById("609e12c8d3f0a33a84d1b888");
        // await findReviewById("609e12c8d3f0a33a84d1b888");

        // await moviesReleaseOrder('asc');

        // await findAllMovies();
        // await findAllActors();
        // await findAllReviews();

        // await createReview();
        // await createMovie();
        // await createActor();

        // await updateMovie();
        // await updateActor();
        // await updateReview();

        // await deleteOneMovie();
        // await deleteOneActor();
        // await deleteOneReview();

    } catch (error) {
        console.log(error);
    } finally {
        await db.close()
    }
}

main();