import type { NextApiRequest, NextApiResponse } from 'next'
import { customAxiosInstance } from '@libs/fetcher';
import type { WORD_LIST_META } from '@models/dict';

const DIVIDE_MAXIMUM = 100;

type Error = {
  error: string
}

type ResponseData = any // WORD_LIST_META[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | Error>
) {
  if (req.method !== 'POST') {
    res.status(500).send({ error: 'failed to fetch data' })
  }

  let temp;
  const wordList = [];
  const { token, option } = req.body as {
    token: string;
    option: any;
  };

  if (option && option.select === 'all') {
    temp = await customAxiosInstance(token, 'https://learn.dict.naver.com')({
      method: 'get',
      url: '/gateway-api/jakodict/mywordbook/word/list/search',
      params: {
        page_size: 1,
        st: 0,
        domain: 'naver'
      }
    });

    const internalData: WORD_LIST_META = temp.data.data

    const { m_total: total } = internalData;

    for (let i = 1; i < total / DIVIDE_MAXIMUM - 1; i++) {
      temp = await customAxiosInstance(token, 'https://learn.dict.naver.com')({
        method: 'get',
        url: '/gateway-api/jakodict/mywordbook/word/list/search',
        params: {
          page_size: DIVIDE_MAXIMUM,
          st: i,
          domain: 'naver'
        }
      });

      const { m_items } = temp.data.data;

      wordList.push(...m_items);
    }

    wordList.forEach(v => {
      v.content = JSON.parse(v.content);
    })

    const result = {
      wordList,
      wordOnly: wordList.map(({ name }) => name)
    }

    res.status(200).json(result);
  }
}
