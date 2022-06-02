type WORDBOOK_SERVICE = 'jakodict';
type COMMON_LANGUAGE = 'ja' | 'ko';
type WORDBOOK_SOURCE_NAME =
  | '민중서림 엣센스 일한사전'
  | '민중서림 엣센스 한일사전'
  | '日英専門用語辞典 (The CJK Dictionary Institute)'
  | 'デジタル大辞泉（小学館）'
  | '연세대학교 한국어학당 국가별 대표음식';
type WORDBOOK_SOURCE_TYPE = 'dict';
type WORDBOOK_DICT_TYPE = 'jako' | 'koja' | 'jaen' | 'jaja';
type WORDBOOK_PART_NAME =
  | '형용사'
  | '명사'
  | '5단활용 자동사'
  | '5단활용 타동사'
  | '명사, ダナ'
  | '하1단 타동사'
  | '부사'
  | '상1단 타동사'
  | '명사ノナ'
  | '명사, ス자동사'
  | '명사, ス타동사'
  | '부사, ダナ'
  | '상1단 자동사'
  | '하1단 자동사'
  | '[動マ五(四)]'
  | 'ダナ'
  | '연어'
  | '명사, ス자동사·타동사'
  | 'サ행변격 자동사'
  | '5단활용 자동사·타동사'
  | '명사, ダナ, ス자동사'
  | '명사, ダナノ'
  | '접속사'
  | 'ス타동사·자동사'
  | 'ダナノ'
  | '부사, トス자동사'
  | '명사, ス타동사·자동사'
  | '하1단 자동사·타동사'
  | 'サ행변격 타동사'
  | '4단활용 자동사'
  | '부사, ス자동사'
  | '하2단 타동사';
type WORDBOOK_MEAN_LEVEL = 1 | 2 | 3;
type WORDBOOK_MEAN_TYPE = 'nomal';
type WORDBOOK_MEAN_SEQ = '1' | '2' | '3' | '4' | '5' | '6';
type WORDBOOK_EXAMPLE_TYPE = 'none' | 'sente';

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
  service: WORDBOOK_SERVICE;
};

export type COUNT_WORD = {
  readCount: number;
  recentCount: number;
  unReadCount: number;
};

export type WORD_LIST_META = {
  m_items: WORD_LIST[];
  m_total: number;
  next_cursor: string;
  over_last_page: boolean;
};

export type WORD_LIST = Array<{
  content: CONTENT;
  contentType: number;
  createDate: number;
  dicType: 'jako' | 'koja';
  entryId: string;
  id: string;
  memo: null;
  name: string;
  read: boolean;
  saveType: 'basic';
  service: WORDBOOK_SERVICE;
  sourceType: 'dict';
  wordbookId: string;
}>;

export type CONTENT = {
  entry: {
    dict_cid: string;
    dict_type: WORDBOOK_DICT_TYPE;
    entry_id: string;
    language: COMMON_LANGUAGE;
    means: MEANS[];
    members: MEMBERS[];
    service: WORDBOOK_SERVICE;
    source_name: WORDBOOK_SOURCE_NAME;
    source_type: WORDBOOK_SOURCE_TYPE;
  };
};

// 뜻
type MEANS = {
  description_json: any;
  examples: EXAMPLES[];
  language: COMMON_LANGUAGE;
  mean_id: string;
  mean_level: WORDBOOK_MEAN_LEVEL;
  mean_seq: WORDBOOK_MEAN_SEQ;
  mean_type: WORDBOOK_MEAN_TYPE; // "nomal"
  part_id: string;
  part_name: WORDBOOK_PART_NAME; // "명사"
  show_mean: string; // "(빈)틈."
};

// 예문
type EXAMPLES = {
  dict_cid: string;
  example_id: string;
  example_pron: string;
  example_pron_file: string;
  example_type: WORDBOOK_EXAMPLE_TYPE;
  language: COMMON_LANGUAGE;
  show_example: string;
  translations: TRANSLATIONS[];
};

// 번역
type TRANSLATIONS = {
  language: COMMON_LANGUAGE;
  show_translation: string;
  translation_id: string;
};

// 같은발음 다른한자
type MEMBERS = {
  entry_importance: string;
  entry_name: string; // "すきま"
  kanji: string; // "透き間·空き間·隙間"
  member_id: string;
  origin_language: string;
  prons: any;
  super_script: string;
};
