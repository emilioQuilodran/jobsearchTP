const OfferModel = require('../models/offer');
const UserModel = require('../models/user');

class JobOffers {
    async getAll(){
        try {
            const offers = await OfferModel.find()
            return offers;
        } catch(error) {
            console.log(error);
        }
    };

    async create(data){
        try{
            const job = await OfferModel.create(data)
            return job 
        } catch(error) {
            console.log(error);
        }
    }

    async update(id, data){
        try{
            const job = await OfferModel.findOneAndUpdate(id,data,{new:true})
            return job 
        }catch(error){
            console.log(error)
        }
    }

    async delete(id){
        try{
            const job = await OfferModel.findByIdAndDelete(id)
            return job 
        }catch(error){
            console.log(error)
        }
    }
}

module.exports = JobOffers