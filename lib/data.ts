import { connectToDB } from '@/utils/connectToDB';
import User from '@/models/user.model';
import Word from '@/models/word.model';

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