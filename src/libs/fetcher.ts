import axios from 'axios';

const API_ENDPOINT = 'https://apis.naver.com/';

export const customAxiosInstance = (Cookie: string) => axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    origin: 'https://learn.dict.naver.com',
    Cookie,
  } as any,
  withCredentials: true,
});