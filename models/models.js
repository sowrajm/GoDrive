const mongoose = require('mongoose');

// Define the car schema
const carSchema = new mongoose.Schema({
  carname: {type:String , required: true},
  model: { type: String, required: true },
  year: { type: Number, required: true },
  rentalPrice: { type: Number, required: true },
  availability: { type: Boolean, default: true },
  features: [{ type: String }],
  imageUrl: { type: String , required : true},
  // Connection to reservations
  reservations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reservation' }],

});

// Define the reservation schema
const reservationSchema = new mongoose.Schema({
  car: { type: mongoose.Schema.Types.ObjectId, ref: 'Car', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  totalPrice: { type: Number, required: true },
 
});

// Define the user schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // Connection to reservations
  reservations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reservation' }],
 
});

// Create the car model
const car = mongoose.model('car', carSchema);

// Create the reservation model
const reservation = mongoose.model('reservation', reservationSchema);

// Create the user model
const user = mongoose.model('user', userSchema);

module.exports = { car, reservation, user };
