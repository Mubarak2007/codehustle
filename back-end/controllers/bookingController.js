import Booking from '../models/Booking.js';
import nodemailer from 'nodemailer';

export const createBooking = async (req, res) => {
  try {
    const { name, email, contactNumber, destination, numberOfPeople, arrivalDate, departureDate } = req.body;

    const booking = await Booking.create({
      name,
      email,
      contactNumber,
      destination,
      numberOfPeople,
      arrivalDate,
      departureDate
    });

    // Send confirmation email
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or use 'hotmail', 'yahoo', etc.
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Travelzy Booking Confirmation',
      html: `
        <h2>Hi ${name},</h2>
        <p>Thank you for booking your trip with Travelzy!</p>
        <p><strong>Destination:</strong> ${destination}</p>
        <p><strong>Arrival:</strong> ${new Date(arrivalDate).toDateString()}</p>
        <p><strong>Departure:</strong> ${new Date(departureDate).toDateString()}</p>
        <p>We are excited to have you on board. Have a great journey! ✈️</p>
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'Booking created and email sent!', booking });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};
