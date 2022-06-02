import { atom } from 'recoil';
import type { COUNT_WORD, WORDBOOK } from '@models/dict';

export const dictState = atom<{
  wordbook: WORDBOOK[];
  countWord: COUNT_WORD;
}>({
  key: 'dict',
  default: {
    wordbook: [],
    countWord: {
      readCount: 0,
      recentCount: 0,
      unReadCount: 0,
    },
  },
});
