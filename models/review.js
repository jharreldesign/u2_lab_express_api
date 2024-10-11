const { Schema } = require ('mongoose')

const reviewSchema = new Schema(
    {
        movieReviewed: { type: String, required: true},
        content: { type: String, required: true },
        starRating: { type: Number, required: true },
        reviewedBy: { type: String, required: true }
    },
    { timestamps: true }
)

module.exports = reviewSchema;