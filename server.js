import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Importing Routes
import userRouter from './routes/userRoute.js';
import authRouter from './routes/authRoute.js';

dotenv.config();

const app = express();

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// DB CONNECT
const db = process.env.MONGO_URI;

// Connect DB
mongoose
   .connect(db)
   .then(() => console.log('Mongo DB Connected!!!'))
   .catch(() => console.log('Not Connected!!!'));

// Api Routes
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
   console.log(`Server started in ${process.env.NODE_ENV} mode on ${PORT}!!!`)
);
