import type { NextApiRequest, NextApiResponse } from 'next';
import { customAxiosInstance } from '@libs/fetcher';
import type { COUNT_WORD } from '@models/dict';

type Error = {
  error: string;
};

type ResponseData = COUNT_WORD;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | Error>
) {
  if (req.method !== 'POST') {
    res.status(500).send({ error: 'failed to fetch data' });
  }

  const { token } = req.body as Record<'token', string>;

  const result = await customAxiosInstance(
    token,
    'https://learn.dict.naver.com'
  )({
    method: 'get',
    url: '/gateway-api/jakodict/mywordbook/word/count.dict',
    params: {
      domain: 'naver',
    },
  });

  const profile: ResponseData = result.data.data;

  res.status(200).json(profile);
}
