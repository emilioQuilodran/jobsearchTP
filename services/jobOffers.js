const OfferModel = require('../models/offer');
const UserModel = require('../models/user');

class JobOffers {
    async getAll(){
        try {
            const offers = await OfferModel
                                    .find({'applicants': { $not: { $size: 0 }}})
                                    .populate({
                                        path: 'applicants',
                                        select: 'name email'
                                    });

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

    async getBySalaray(amount){
        const offers = await OfferModel.find({salary: amount})
        if(offers.length != 0){
            return offers;
        } else {
            return {
                msg: "no se encontraron elementos"
            }
        }
    }
}

module.exports = JobOffers