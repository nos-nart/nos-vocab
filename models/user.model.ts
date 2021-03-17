import mongoose, { Document, Schema } from 'mongoose';

export interface UserInterface extends Document {
  name: string;
  email: string;
  image: string;
  words: string[];
  starWordId: string[];
  starPhrasalId: string[];
  learnedWordId: string[];
  learnedPhrasalId: string[];
}

export const UserSchema: Schema = new Schema(
  {
    name: String,
    email: String,
    image: String,
    starWordId: [{
      type: Schema.Types.ObjectId,
      ref: 'Word'
    }],
    starPhrasalId: [{
      type: Schema.Types.ObjectId,
      ref: 'Phrasal'
    }],
    learnedWordId: [{
      type: Schema.Types.ObjectId,
      ref: 'Word'
    }],
    learnedPhrasalId: [{
      type: Schema.Types.ObjectId,
      ref: 'Phrasal'
    }]
  }
)

export const User = mongoose.models?.User ?? mongoose.model<UserInterface>('User', UserSchema);
