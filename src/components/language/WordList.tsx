import { WORD_LIST } from '@models/dict';
import { Box } from '@mui/material';
import { authState } from '@src/store/general';
import axios from 'axios';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

const WordList = () => {
  useEffect(() => {
    const token = localStorage.getItem('token')
      ? localStorage.getItem('token')
      : // eslint-disable-next-line react-hooks/rules-of-hooks
        useRecoilValue(authState);

    async function getWordList() {
      const result = await axios.post('/api/getWordList', {
        token,
        option: {
          select: 'all',
        },
      });

      const data: { wordList: WORD_LIST; wordOnly: string[] } = result.data;
    }

    getWordList();
  }, []);

  return <Box>this works!</Box>;
};

export default WordList;
