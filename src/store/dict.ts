import { atom } from 'recoil';
import type { COUNT_WORD, WORDBOOK } from '@models/dict';

export const dictState = atom<{
  wordbook: {
    lists: WORDBOOK[];
    length: number;
  };
  countWord: COUNT_WORD;
}>({
  key: 'dict',
  default: {
    wordbook: {
      lists: [],
      length: 0,
    },
    countWord: {
      readCount: 0,
      recentCount: 0,
      unReadCount: 0,
    },
  },
});
