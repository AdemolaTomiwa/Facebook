import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = express.Router();

// User Model
import User from '../models/usersModel.js';

// Register User
// POST @/api/users
// Public
router.post('/', (req, res) => {
   const { firstName, surName, email, phone, password, dob, gender, date } =
      req.body;

   // Validation
   if (!firstName) {
      res.status(400).json({ msg: 'What is your First Name?' });
   } else if (!surName) {
      res.status(400).json({ msg: 'What is your Last Name?' });
   } else if (!email) {
      res.status(400).json({ msg: 'What is your Email?' });
   } else if (!password) {
      res.status(400).json({ msg: 'What is your Password?' });
   } else if (password.length <= 5) {
      res.status(400).json({ msg: 'Password should be at least 6 character!' });
   } else if (!phone) {
      res.status(400).json({ msg: 'What is your Mobile Number?' });
   } else if (phone.length <= 10 || phone.length > 11) {
      res.status(400).json({ msg: 'Please insert a valid mobile number!' });
   } else if (!gender) {
      res.status(400).json({ msg: 'What is your Gender?' });
   } else if (!gender) {
      res.status(400).json({ msg: 'What is your Gender?' });
   } else if (!dob) {
      res.status(400).json({ msg: 'What is your Date of Birth?' });
   } else {
      // Check for existing user
      User.findOne({ email })
         .then((user) => {
            if (user) {
               return res
                  .status(400)
                  .json({ msg: 'User already exist! Please Login' });
            }
            const newUser = new User({
               firstName,
               surName,
               email,
               password,
               phone,
               dob,
               date,
               gender,
            });

            // Create a salt
            bcrypt.genSalt(10, (err, salt) => {
               bcrypt.hash(newUser.password, salt, (err, hash) => {
                  if (err) throw err;

                  newUser.password = hash;

                  // save user
                  newUser.save().then((user) => {
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
                  });
               });
            });
         })
         .catch((err) => res.status(400).json({ msg: 'An error occurred!' }));
   }
});

export default router;
