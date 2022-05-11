const UserService = require('../../services/users');
const authValidation = require("../middlewares/authValidation")
const express = require("express")

function users(app){
    const router = express.Router();
    const userServ = new UserService()

    app.use("/api/users",router)


    router.get('/', ...authValidation("employer-admin") , async (req, res) => {
        const users = await userServ.getAll();
        return res.json(users)
    })

    router.post("/", ...authValidation("employer-admin"),async (req,res)=>{
        const user = await userServ.create(req.body)
        return res.json(user)
    })

    router.put("/:id", ...authValidation("employer-admin"),async (req,res)=>{
        const user = await userServ.update(req.params.id,req.body)
        return res.json(user)
    })

    router.delete("/:id", ...authValidation("employer-admin"),async (req,res)=>{
        const user = await userServ.delete(req.params.id)
        return res.json({msg: "usuario eliminado"})
    })
}

module.exports = users;