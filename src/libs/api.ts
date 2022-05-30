import axios from 'axios';

type METHOD = 'get' | 'post'

export const send = async (method: METHOD, url: string, payload: any) => {
  return await axios[method](url, payload);
}