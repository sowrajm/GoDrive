let { reservation }= require("../models/models")

async function addreservation(req,res) 
{
    let body =  req.body
    let newReservation = new reservation({
        car: req.params.id,
        user: body.user,
        startDate : body.startDate,
        endDate: body.endDate,
        totalPrice: body.totalPrice,
    }) 
    await newReservation.save()
    console.log(body);
    res.json("new reservation done")
}

async function getreservation(req,res)  {
    const get_reservation = await reservation.findById(req.params.id);
    res.json(get_reservation);
  };

  async function alterreservation ( req, res)
{
    
    const updatedreservation = await reservation.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
    
      res.json(updatedreservation);
} 

async function deletereservation ( req, res)
{
    
    await reservation.deleteOne({ _id: req.params.id });
    res.json(reservation);
    
}

module.exports = { addreservation , alterreservation , deletereservation , getreservation}