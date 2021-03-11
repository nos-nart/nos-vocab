import axios from 'axios';

// import { dump } from '@/utils/debug';

export const fetcher = async (url: string): Promise<any> => {
  try {
    const res = await axios.get(url)
    return res.data
  } catch (err) {
    const error= new Error(err.message ?? `Api Error: ${url}`) as any;

    if (err.response) {
      error.data = err.response.data;
      error.status = err.response.status;
      error.headers = err.response.headers;
    }

    // dump(error)
    throw error;
  }
}
