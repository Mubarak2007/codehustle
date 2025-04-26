import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import bookingRoutes from './routes/bookingRoutes.js';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());

import userRoutes from './routes/userRoutes.js';
app.use('/api/users', userRoutes);
app.use('/api/bookings', bookingRoutes);



app.get('/', (req, res) => {
  res.send('Welcome to Travelzy API!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
