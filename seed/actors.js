const db = require('../db');
const { Actor, Movie } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
    const goonies = await Movie.findOne({ title: 'The Goonies' });
    const darkKnight = await Movie.findOne({ title: 'The Dark Knight' });
    const willyWonka = await Movie.findOne({ title: 'Willy Wonka & The Chocolate Factory' });
    const sandlot = await Movie.findOne({ title: 'The Sandlot' });
    const halloween = await Movie.findOne({ title: 'Halloween' });
    const xMen = await Movie.findOne({ title: 'X-Men' });
    const amazingSpiderman = await Movie.findOne({ title: 'The Amazing Spider-Man' });

    const actors = [
        {
            first_name: "Sean",
            last_name: "Aston",
            age: 53,
            isAlive: true,
            lastMovie: goonies._id
        },
        {
            first_name: "Christian",
            last_name: "Bale",
            age: 50,
            isAlive: true,
            lastMovie: darkKnight._id
        },
        {
            first_name: "Gene",
            last_name: "Wilder",
            age: 83,
            isAlive: false,
            lastMovie: willyWonka._id
        },
        {
            first_name: "Tom",
            last_name: "Guiry",
            age: 42,
            isAlive: true,
            lastMovie: sandlot._id
        },
        {
            first_name: "Jamie",
            last_name: "Lee Curtis",
            age: 65,
            isAlive: true,
            lastMovie: halloween._id
        },
        {
            first_name: "Patrick",
            last_name: "Stewart",
            age: 84,
            isAlive: true,
            lastMovie: xMen._id
        },
        {
            first_name: "Andrew",
            last_name: "Garfield",
            age: 41,
            isAlive: true,
            lastMovie: amazingSpiderman._id
        }
    ];

    await Actor.insertMany(actors);
    console.log("Actors created successfully!");

    const allActors = await Actor.find().populate('lastMovie');
    console.log("Current Actors in the Database:");
    console.log(allActors);
}

const run = async () => {
    await main();
    db.close();
};

run();
