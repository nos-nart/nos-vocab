import mongoose from 'mongoose';

import { connectToDB } from '@/utils/connectToDB';
import { User } from '@/models/user.model';
import { Word } from '@/models/word.model';

export const getUser = async (userId: string): Promise<any> => {
  await connectToDB();
  const user = await User.findById(userId);

  return user.toObject();
}

export const getWords = async (): Promise<any> => {
  await connectToDB();
  const words = await Word.find({});

  return words;
}

export const addWord = async (word: string, userId: string): Promise<any> => {
  await connectToDB();
  const _word = new Word({ word, creator: mongoose.Types.ObjectId(userId) });

  const newWord = await _word.save();
  return newWord;
}

export const getMyWord = async (userId: string): Promise<any> => {
  await connectToDB();
  const myWords = await Word.find({ creator: mongoose.Types.ObjectId(userId) }).exec();

  return myWords;
}