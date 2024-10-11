const { Schema } = require ('mongoose')

const actorSchema = new Schema(
    {
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        age: { type: Number, required: true },
        isAlive: { type: Boolean, required: true },
        lastMovie: { type: Schema.Types.ObjectId, ref: 'Movie'}
    },
    { timestamps: true }
)

module.exports = actorSchema;