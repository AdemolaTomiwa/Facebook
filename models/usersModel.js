import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
   firstName: {
      type: String,
      required: true,
   },
   surName: {
      type: String,
      required: true,
   },
   phone: {
      type: String,
      required: true,
   },
   email: {
      type: String,
      required: true,
      unique: true,
   },
   gender: {
      type: String,
      required: true,
   },
   dob: [
      {
         date: {
            type: String,
            required: true,
         },
         month: {
            type: String,
            required: true,
         },
         year: {
            type: String,
            required: true,
         },
      },
   ],
   password: {
      type: String,
      required: true,
   },
   date: {
      type: Date,
      default: Date.now,
   },
});

const User = mongoose.model('user', UserSchema);

export default User;
