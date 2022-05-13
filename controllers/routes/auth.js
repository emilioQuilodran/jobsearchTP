const express = require("express")
const Auth = require("../../services/auth")
const helmet = require("helmet");


function auth(app){
    app.use(helmet());
    const router = express.Router()
    const authServ = new Auth()

    app.use("/api/auth",router)

    router.post("/login",async (req,res)=>{
        const result = await authServ.login(req.body)
        return res.status(result.error?400:200).json(result)
    })

    router.post("/signup",async (req,res)=>{
        const result = await authServ.signup(req.body)
        return res.status(result.error?400:200).json(result)
    })

    router.get('/is-token-expired', async (req, res) => {
        const result = await authServ.isTokenExpired(req)
        return res.status(result?400:200).json(result)
    })
}

module.exports = auth