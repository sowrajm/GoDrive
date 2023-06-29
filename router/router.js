const express = require('express');
const router = express.Router();
const { car, reservation, user } = require('../models/models');
const { ObjectId } = require('mongodb');

router.post("/addcar",addCar)

async function addCar(req,res) 
{
    let body =  req.body
    // const customId = ObjectId.createFromHexString(body.number);
    // let abc=JSON.stringify(body.number)
    // const customId = new ObjectId(abc);
    let newcar = new car({ 
        
        carname: body.name,
        model: body.model, 
        year: body.year,  
        rentalPrice: body.rentalPrice,
        availability: body.availability, 
        features: body.features, 
        imageUrl: body.imageUrl 
    })
    await newcar.save()
    console.log(body);
    res.json("Added new car")
}
 
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