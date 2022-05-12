const express = require('express');
const authValidation = require("../middlewares/authValidation")
const JobOffers = require('../../services/jobOffers');

function jobsOffer(app){
    const router = express.Router()
    const jobOffers = new JobOffers()

    app.use("/api/job-offers", router)

    router.get('/', async (req, res)=> {
        const response = await jobOffers.getAll();
        if(response.length != 0){
            return res.status(200).json(response);
        }
        return res.status(400).json({msg: "no se encontraron datos"});
    });

    router.post('/', ...authValidation("employer-admin"), async (req, res) => {
        const job = await jobOffers.create(req.body)
        return res.json(job)
    })

    router.patch('/:id', ...authValidation("employer-admin"),async (req, res) => {
        console.log(req.params.id, req.body);
        const job = await jobOffers.update(req.params.id, req.body);
        return res.json(job)
    });

    router.delete("/:id", ...authValidation("employer-admin"), async (req,res)=>{
        const job = await jobOffers.delete(req.params.id)
        return res.json({msg: "oferta eliminada"})
    })

    router.get('/by-salary/:amount', async(req, res) => {
        const response = await jobOffers.getBySalaray(req.params.amount)
        return res.json(response);
    })
}

module.exports = jobsOffer