let { car, reservation, user }= require("../models/models")

async function addcar(req,res) 
{
    let body =  req.body
    // const customId = ObjectId.createFromHexString(body.number);
    // let abc=JSON.stringify(body.number)
    // const customId = new ObjectId(abc);
    let newcar = new car({ 
        carname: body.carname,
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


async function getcar(req,res)  {
    const cardetails = await car.findById(req.params.id);
    res.json(cardetails);
  };



async function altercar ( req, res)
{
    
    const updatedcar = await car.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
    
      res.json(updatedcar);
} 

async function deletecar ( req, res)
{
    
    await car.deleteOne({ _id: req.params.id });
    res.json(car);
    
}





module.exports = { addcar , altercar , deletecar , getcar}