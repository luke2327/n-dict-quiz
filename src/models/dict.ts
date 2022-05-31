type WordbookService = 'jakodict';

export type WORDBOOK = {
  lastLearnTimestamp: number;
  lastReciteTimestamp: number;
  lastWordTimestamp: number;
  updateTimestamp: number;
  id: string;
  name: string;
  readCount: number;
  recitePercent: number;
  unReadCount: number;
  wordCount: number;
  service: WordbookService,
};

export type COUNT_WORD = {
  readCount: number;
  recentCount: number;
  unReadCount: number;
}