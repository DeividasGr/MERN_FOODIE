import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: 'Name is required',
    },
    email: {
      type: String,
      trim: true,
      required: 'Email is required',
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 8,
      max: 32,
    },
    id: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);
