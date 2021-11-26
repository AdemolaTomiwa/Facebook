import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = express.Router();

// User Model
import User from '../models/usersModel.js';

// Login User
// POST @/api/auth
// Public
router.post('/', (req, res) => {
   const { email, password } = req.body;

   // Validation
   if (!email) {
      res.status(400).json({ msg: 'What is your Email?' });
   } else if (!password) {
      res.status(400).json({ msg: 'What is your Password?' });
   } else {
      // Check for existing user
      User.findOne({ email })
         .then((user) => {
            if (!user) {
               return res
                  .status(400)
                  .json({ msg: 'User does not exist! Please Register' });
            }

            // Validate password
            bcrypt
               .compare(password, user.password)
               .then((isMatch) => {
                  if (!isMatch) {
                     return res
                        .status(400)
                        .json({ msg: 'Invalid Credentials!' });
                  }

                  jwt.sign(
                     { id: user._id },
                     process.env.JWT_SECRET,
                     { expiresIn: 7200 },
                     (err, token) => {
                        if (err) throw err;

                        res.status(201).json({
                           token,
                           user: {
                              id: user._id,
                              firstName: user.firstName,
                              surName: user.surName,
                              gender: user.gender,
                              phone: user.phone,
                              dob: user.dob,
                              email: user.email,
                              date: user.date,
                           },
                        });
                     }
                  );
               })
               .catch((err) =>
                  res.status(400).json({ msg: 'An error occured!' })
               );
         })
         .catch((err) => res.status(400).json({ msg: 'An error occurred!' }));
   }
});

export default router;
