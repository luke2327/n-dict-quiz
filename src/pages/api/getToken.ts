// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Error = {
  error: string
}

type ResponseData = PROFILE;

import { customAxiosInstance } from '@libs/fetcher';
import { PROFILE } from '@models/profile'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | Error>
) {
  if (req.method !== 'POST') {
    res.status(500).send({ error: 'failed to fetch data' })
  }

  const { token } = req.body as Record<'token', string>;

  const result = await customAxiosInstance(token)({
    method: 'get',
    url: '/wordbookUserProfile/commonproxy/dict/user/profile'
  });

  const profile: ResponseData = result.data;

  res.status(200).json(profile)
}
