const db = require('../db');
const { Movie, Review } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
    const gooniesReview = await Review.findOne({ reviewedBy: 'One Eyed Willie' });
    const darkKnightReview = await Review.findOne({ reviewedBy: 'Oswald Chesterfield Cobblepot' });
    const willyWonkaReview = await Review.findOne({ reviewedBy: 'Umpaloompa #48' });
    const sandlotReview = await Review.findOne({ reviewedBy: 'Los Angeles Dodgers' });
    const halloweenReview = await Review.findOne({ reviewedBy: 'The scared kid down the street' });
    const xMenReview = await Review.findOne({ reviewedBy: 'Magneto' });
    const amazingSpidermanReview = await Review.findOne({ reviewedBy: 'The Comic Book Guy' });

    const movies = [
        {
            title: "The Goonies",
            releaseYear: 1985,
            runtimeInMinutes: 114,
            genre: ["Adventure", "Action"],
            studio: "Warner Brothers",
            description: "A group of young misfits called The Goonies discover an ancient map and set out on an adventure to find a legendary pirate's long-lost treasure.",
            review: gooniesReview._id
        },
        {
            title: "The Dark Knight",
            releaseYear: 2008,
            runtimeInMinutes: 132,
            genre: ["Action", "Crime", "Drama", "Thriller"],
            studio:"Warner Brothers Studios",
            description: "When a menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman, James Gordon and Harvey Dent must work together to put an end to the madness.",
            review: darkKnightReview._id
        },
        {
            title: "Willy Wonka & The Chocolate Factory", 
            releaseYear: 1971,
            runtimeInMinutes: 140,
            genre: ["Adventure", "Comedy", "Family", "Fantasy", "Musical"],
            studio: "Paramount Pictures",
            description: "A poor but hopeful boy seeks one of the five coveted golden tickets that will send him on a tour of Willy Wonka's mysterious chocolate factory.",
            review: willyWonkaReview._id
        },
        {
            title: "The Sandlot",
            releaseYear: 1993,
            runtimeInMinutes: 141,
            genre: ["Baseball", "Comedy", "Drama", "Coming Of Age"],
            studio: '20th Century Fox',
            description: "In the summer of 1962, a new kid in town is taken under the wing of a young baseball prodigy and his rowdy team, resulting in many adventures.",
            review: sandlotReview._id
        },
        {
            title: "Halloween",
            releaseYear: 1978,
            runtimeInMinutes: 131,
            genre: ["Slasher Horror", "Thriller"],
            studio: "Compass International Pictures",
            description: "Fifteen years after murdering his sister on Halloween night 1963, Michael Myers escapes from a mental hospital and returns to the small town of Haddonfield, Illinois to kill again.",
            review: halloweenReview._id
        },
        {
            title: "X-Men",
            releaseYear: 2000,
            runtimeInMinutes: 144,
            genre: ["Superhero", "Action", "Adventure", "SciFi"],
            studio: "20th Century Fox",
            description: "In a world where mutants (evolved super-powered humans) exist and are discriminated against, two groups form for an inevitable clash: the supremacist Brotherhood, and the pacifist X-Men.",
            review: xMenReview._id
        }
        ,
        {
            title: "The Amazing Spider-Man",
            releaseYear: 2012,
            runtimeInMinutes: 236,
            genre: ["Superhero", "Action", "Adventure", "Sci-Fi"],
            studio: "Columbia Pictures",
            description: "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
            review: amazingSpidermanReview._id
        }
    ];

    await Movie.insertMany(movies);
    console.log("Created movie");

    const allMovies = await Movie.find().populate('review');
    console.log("Current movies with reviews in the database: ", review);
    console.log(allMovies);
}

const run = async () => {
    await main();
    db.close();
}

run();
