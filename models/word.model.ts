import mongoose, { Document, Schema } from 'mongoose';

export interface WordInterface extends Document {
  word: string;
  creatorId: string;
  definitions: string[];
  color: string;
}

const WordSchema: Schema = new Schema(
  {
    word: String,
    creatorId: {
      ref: 'User',
      type: Schema.Types.ObjectId
    },
    definitions: [String],
    color: String
  },
  {
    timestamps: true
  }
)

const Word = mongoose.model<WordInterface>('Word', WordSchema);

export default Word;
