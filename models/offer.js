const { type } = require("express/lib/response");
const {mongoose} = require("../config/db")

const Schema = mongoose.Schema

const offerSchema = new Schema({
    title: String,
    description: String,
    publisherId: String,
    salary: Number,
    categories: [{
        type: String
    }],
    applicants: [
        {
            type: Schema.ObjectId, ref: "User"
        }
    ],
    pais: {
        type: String
    }
},
{
    timestamps: true
})

const OfferModel = mongoose.model('Offers', offerSchema)

module.exports = OfferModel;