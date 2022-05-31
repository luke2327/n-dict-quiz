import type { NextApiRequest, NextApiResponse } from 'next'
import { customAxiosInstance } from '@libs/fetcher';
import type { WORDBOOK } from '@models/dict';

type Error = {
  error: string
}

type ResponseData = WORDBOOK[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | Error>
) {
  if (req.method !== 'POST') {
    res.status(500).send({ error: 'failed to fetch data' })
  }

  console.log('initial');

  const { token } = req.body as Record<'token', string>;

  const result = await customAxiosInstance(token, 'https://learn.dict.naver.com')({
    method: 'get',
    url: '/gateway-api/jakodict/mywordbook/wordbook/list.dict',
    params: {
      page: 1,
      pageSize: 100,
      st: 0,
      domain: 'naver'
    }
  });

  const profile: ResponseData = result.data.data.m_items;

  res.status(200).json(profile)
}
