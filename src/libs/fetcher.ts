import axios from 'axios';

const API_ENDPOINT = 'https://apis.naver.com/';

export const customAxiosInstance = (Cookie: string, Endpoint: string = API_ENDPOINT) => axios.create({
  baseURL: Endpoint,
  headers: {
    origin: 'https://learn.dict.naver.com',
    Cookie,
  } as any,
  withCredentials: true,
});