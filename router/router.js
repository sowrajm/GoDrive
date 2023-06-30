const express = require('express');
const router = express.Router();
// const { car, reservation, user } = require('../models/models');
// const { ObjectId } = require('mongodb');
const { addcar , altercar , deletecar , getcar} = require("../controllers/carcontroller")


router.post("/car",addcar)
router.get("/car/:id",getcar)
router.put("/car/:id",altercar)

router.delete("/car/:id",deletecar)








 
router.post("/reserve",newreservation)
async function newreservation(req,res) 
{
    let body =  req.body
    let newReservation = new reservation({
        car: body.number,
        user: body.userid,
        startDate: body.startDate,
        endDate: body.endDate,
        totalPrice: body.price,
    }) 
    await newReservation.save()
    console.log(body);
    res.json("new reservation done")
}

router.post("/userdetails",createuser)
async function createuser(req,res) 
{
    let body =  req.body
    let newuser = new user({
        name: body.name,
        email: body.mail,
        password: body.password,
        // Connection to reservations
        reservations: body.reservation,
    })
    await newuser.save()
    console.log(body);
    res.json("new user created")
}
module.exports = router;