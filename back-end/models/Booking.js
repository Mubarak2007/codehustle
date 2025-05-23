import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  contactNumber: { type: String, required: true },
  destination: { type: String, required: true },
  numberOfPeople: { type: Number, required: true },
  arrivalDate: { type: Date, required: true },
  departureDate: { type: Date, required: true }
}, { timestamps: true });

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;
