import NextCors from 'nextjs-cors';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function cors<T = any>(
  req: NextApiRequest,
  res: NextApiResponse<T>
) {
  await NextCors(req, res, {
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: 'localhost:3000',
    optionsSuccessStatus: 200,
  });
}
