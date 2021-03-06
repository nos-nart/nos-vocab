import mongoose from 'mongoose';

const connection: {[key: string]: any} = {};

export const connectToDB = async (): Promise<any> => {
  let db = null

  if (connection.isConnected === 1) return

  try {
    db = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
  } catch (error) {
    console.error(error);
    return
  }

  connection.isConnected = db.connections[0].readyState
}

export const isDBConnected = () => connection.isConnected === 1;
