const UserModel = require('../models/user');
const OfferModel = require('../models/offer');

class Users {
    async getAll(){
        try {
            const users = await UserModel.find()
            return users;
        } catch(error) {
            console.log(error);
        }
    };

    async create(data){
        try{
            const user = await UserModel.create(data)
            return user 
        }catch(error){
            if(error.code===11000){
                const message = `El correo "${error.keyValue.email}" ya está en uso`
                return {
                    error:true,
                    message
                }
            }
        }
    }

    async update(id,data){
        try{
            const user = await UserModel.findByIdAndUpdate(id,data,{new:true})
            return user 
        }catch(error){
            console.log(error)
        }
    }

    async delete(id){
        try{
            const user = await UserModel.findByIdAndDelete(id)

            return user 
        }catch(error){
            console.log(error)
        }
    }

    async getByEmail(email){
        try{
            const user = await UserModel.findOne({email})
            // Ya tenemos disponibles los datos

            return user // Objeto
        }catch(error){
            console.log(error)
        }
    }

    async applyJob(id, data){
        try {
            const offerJob = await OfferModel.findById(id);
            const user = await UserModel.find({email: data.email})
            let idUser = user[0]._id.toString();

            let applicants = offerJob.applicants;
            let userApplied = applicants.includes(idUser)
            if(userApplied){
                return {
                    error: true,
                    msg: "alla estan aplicando dos veces"
                }
            }
            applicants.push(idUser)
            const response = await OfferModel.findByIdAndUpdate(id,offerJob,{new:true})
            return response;
        } catch (error) {
            console.log(error);
        }
    }
    
}

module.exports = Users