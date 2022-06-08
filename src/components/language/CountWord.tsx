import { Box, Paper, Typography, SxProps, Theme } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { authState } from '@src/store/general';
import { COUNT_WORD } from '@models/dict';
import { dictState } from '@src/store/dict';
import { useRouter } from 'next/router';

const PaperSx: SxProps<Theme> = {
  width: 80,
  height: 80,
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  position: 'relative',
  pt: 1.5,
  pl: 1.5,
};

const PaperBeforeSx: SxProps<Theme> = {
  content: '""',
  position: 'relative',
  top: -4,
  left: 2,
  width: 10,
  borderWidth: 2,
  borderStyle: 'solid',
};

const paperSxColorWay: Record<keyof COUNT_WORD, SxProps<Theme>> = {
  recentCount: {
    '&:before': {
      ...PaperBeforeSx,
      borderColor: '#65abff',
    },
    '& .MuiTypography-root': {
      color: '#65abff',
    },
  },
  unReadCount: {
    '&:before': {
      ...PaperBeforeSx,
      borderColor: '#ff7d83',
    },
    '& .MuiTypography-root': {
      color: '#ff7d83',
    },
  },
  readCount: {
    '&:before': {
      ...PaperBeforeSx,
      borderColor: '#05d75a',
    },
    '& .MuiTypography-root': {
      color: '#05d75a',
    },
  },
};

const paperTitle: Record<keyof COUNT_WORD, string> = {
  recentCount: 'すべて',
  unReadCount: '学習中',
  readCount: '覚えた',
};

const paperRoutes: Record<keyof COUNT_WORD, string> = {
  recentCount: 'all',
  unReadCount: 'non_memorization',
  readCount: 'memorization',
};

const CountWord = () => {
  const [dict, setDict] = useRecoilState(dictState);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token')
      ? localStorage.getItem('token')
      : // eslint-disable-next-line react-hooks/rules-of-hooks
        useRecoilValue(authState);

    async function getCountWord() {
      const result = await axios.post<COUNT_WORD>('./api/getCountWord', {
        token,
      });

      setDict({
        ...dict,
        countWord: {
          ...result.data,
        },
      });
    }

    getCountWord();
  }, []);

  const selectDict = (id: keyof COUNT_WORD) => {
    router.push(router.asPath + '/' + paperRoutes[id]);
  };

  return (
    <Box mb={2}>
      {dict.countWord.readCount ||
      dict.countWord.recentCount ||
      dict.countWord.unReadCount ? (
        <Box display={'flex'} justifyContent="space-around">
          {Object.entries(dict.countWord)
            .reverse()
            .map(([key, value]) => (
              <Paper
                key={key}
                sx={{ ...PaperSx, ...paperSxColorWay[key as keyof COUNT_WORD] }}
                elevation={1}
                variant="outlined"
                square
                onClick={() => selectDict(key as keyof COUNT_WORD)}
              >
                <Typography variant="h1">{value}</Typography>
                <Typography fontSize={12} pl={0.3}>
                  {paperTitle[key as keyof COUNT_WORD]}
                </Typography>
              </Paper>
            ))}
        </Box>
      ) : null}
    </Box>
  );
};

export default CountWord;
