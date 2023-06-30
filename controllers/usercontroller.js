let { user }= require("../models/models")


async function adduser(req,res) 
{
    let body =  req.body
    let newuser = new user({
        name: body.name,
        email: body.email,
        password: body.password
    })
    await newuser.save()
    console.log(body);
    res.json("new user created")
}



async function getuser(req,res)  {
    const userdet = await user.findById(req.params.id);
    res.json(userdet);
  };



async function alteruser ( req, res)
{
    
    const alteruserdetails = await user.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
    
      res.json(alteruserdetails);
} 

async function deleteuser ( req, res)
{
    
    await user.deleteOne({ _id: req.params.id });
    res.json(user);
    
}


module.exports = { adduser , alteruser , deleteuser , getuser}
