const { Schema } = require ('mongoose')

const movieSchema = new Schema(
    {
        title: { type: String, required: true },
        releaseYear: { type: Number, required: true },
        runtimeInMinutes: { type: Number, required: true },
        genre: { type: [String], required: true },
        studio: { type: String, required: true },
        description: { type: String, required: true },
        review: { type: Schema.Types.ObjectId, ref: 'Review' }
    },
    { timestamps: true }
)

module.exports = movieSchema;