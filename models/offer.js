const {mongoose} = require("../config/db")

const Schema = mongoose.Schema

const offerSchema = new Schema({
    title: String,
    description: String,
    categories: [{
        type: String
    }],
    pais: {
        type: String
    }
},
{
    timestamps: true
})

const OfferModel = mongoose.model('Offers', offerSchema)

module.exports = OfferModel;