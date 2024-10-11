const db = require('../db');
const { Review } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
    const reviews = [
        {
            content: "The Goonies is a nostalgic adventure that captures the spirit of childhood as a group of misfit friends embarks on a quest to find a legendary pirate's treasure. With a perfect blend of humor, heart, and thrilling escapades, this classic film remains a beloved favorite for audiences of all ages.",
            starRating: 3.9,
            reviewedBy: "One Eyed Willie"
        },
        {
            content: "The Dark Knight is a masterful exploration of chaos and morality, featuring an unforgettable performance by Heath Ledger as the Joker, who challenges Batman's ideals in a gritty and atmospheric Gotham City. The film's intense action sequences, complex character development, and thought-provoking themes make it a landmark in the superhero genre, elevating it far beyond typical comic book fare.",
            starRating: 4.8,
            reviewedBy: "Oswald Chesterfield Cobblepot"
        },
        {
            content: "Willy Wonka & the Chocolate Factory is a whimsical journey into a world of imagination and wonder, driven by Gene Wilder's enchanting portrayal of the eccentric chocolatier. With its captivating visuals and timeless songs, the film masterfully blends fantasy with valuable life lessons about greed and humility.",
            starRating: 4.0,
            reviewedBy: "Umpaloompa #48"
        },
        {
            content: "The Sandlot is a nostalgic coming-of-age story that beautifully captures the innocence of childhood and the joy of summer adventures centered around baseball. With its charming characters and memorable moments, the film celebrates friendship, teamwork, and the magic of growing up in the 1960s.",
            starRating: 4,
            reviewedBy: "Los Angeles Dodgers"
        },
        {
            content: "Halloween is a masterclass in suspense, introducing audiences to the chilling figure of Michael Myers as he stalks his victims on Halloween night. With its minimalist score and innovative use of tension, the film has become a quintessential slasher classic that has left a lasting impact on the horror genre.",
            starRating: 4.5,
            reviewedBy: "The scared kid down the street"
        },
        {
            content: "X-Men movie revitalizes the superhero genre by blending thrilling action with themes of prejudice and acceptance, as mutants fight for their place in a world that fears them. With strong performances from a stellar cast, particularly Hugh Jackman as Wolverine, it sets the stage for an engaging franchise that explores the complexities of heroism and identity.",
            starRating: 4.5,
            reviewedBy: "Magneto"
        },
        {
            content: "The Amazing Spider-Man offers a fresh take on the beloved superhero, with Andrew Garfield delivering a charismatic and emotionally resonant performance as Peter Parker. The film balances thrilling action sequences with a heartfelt exploration of loss and responsibility, making it a compelling addition to the Spider-Man franchise.",
            starRating: 3,
            reviewedBy: "The Comic Book Guy"
        }
    ];

    await Review.insertMany(reviews);
    console.log("Created review");
}

const run = async () => {
    await main();
    db.close();
}

run();
