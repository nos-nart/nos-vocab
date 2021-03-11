import mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {},
  {
    timestamps: true
  }
)

export const User = mongoose.models?.User ?? mongoose.model('User', UserSchema);
