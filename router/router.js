const express = require('express');
const router = express.Router();
// const { car, reservation, user } = require('../models/models');
// const { ObjectId } = require('mongodb');
const { addcar , altercar , deletecar , getcar} = require("../controllers/carcontroller")
const { addreservation , alterreservation , deletereservation , getreservation} = require("../controllers/reservationcontroller")
const { adduser , alteruser , deleteuser , getuser} = require("../controllers/usercontroller")


router.post("/car",addcar)
router.get("/car/:id",getcar) 
router.put("/car/:id",altercar)
router.delete("/car/:id",deletecar)


router.post("/car/:id/reserve",addreservation)
router.get("/reservations/:id",getreservation)
router.put("/reservations/:id",alterreservation)
router.delete("/reservations/:id",deletereservation)


router.post("/createuser",adduser)
router.get("/:id",getuser)
router.put("/:id",alteruser)
router.delete("/:id",deleteuser)

module.exports = router

