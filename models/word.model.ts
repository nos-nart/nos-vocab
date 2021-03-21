import mongoose, { Document, Schema } from 'mongoose';

export interface WordInterface extends Document {
  word: string;
  creator: any;
}

const WordSchema: Schema = new Schema(
  {
    word: String,
    creator: {
      ref: 'User',
      type: Schema.Types.ObjectId
    }
  },
  {
    timestamps: true
  }
)

export const Word = mongoose.models?.Word ?? mongoose.model<WordInterface>('Word', WordSchema);
