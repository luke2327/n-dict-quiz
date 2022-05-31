type WordbookService = 'jakodict';
type COMMON_LANGUAGE = "ja" | "ko";

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

export type WORD_LIST_META = {
  m_items: WORD_LIST[];
  m_total: number
  next_cursor: string;
  over_last_page: boolean
}

export type WORD_LIST = {
  content: CONTENT;
  contentType: number;
  createDate: number;
  dicType: "jako" | "koja";
  entryId: string;
  id: string;
  memo: null;
  name: string;
  read: boolean;
  saveType: "basic";
  service: "jakodict";
  sourceType: "dict";
  wordbookId: string;
}

export type CONTENT = {
  entry: {
    dict_cid: string;
    dict_type: "jako" | "koja";
    entry_id: string;
    language: COMMON_LANGUAGE;
    means: MEANS[];
    members: MEMBERS[];
    service: "jakodict";
    source_name: "민중서림 엣센스 일한사전";
    source_type: "dict";
  }
}

type MEANS = {
  description_json: any;
  examples: EXAMPLES[];
  language: COMMON_LANGUAGE;
  mean_id: string;
  mean_level: number;
  mean_seq: string;
  mean_type: string; // "nomal"
  part_id: string;
  part_name: string; // "명사"
  show_mean: string; // "(빈)틈."
}

type EXAMPLES = {
  dict_cid: string;
  example_id: string;
  example_pron: string;
  example_pron_file: string;
  example_type: string;
  language: COMMON_LANGUAGE;
  show_example: string;
  translations: TRANSLATIONS[];
}

type TRANSLATIONS = {
  language: COMMON_LANGUAGE;
  show_translation: string;
  translation_id: string;
}

type MEMBERS = {
  entry_importance: string;
  entry_name: string; // "すきま"
  kanji: string; // "透き間·空き間·隙間"
  member_id: string;
  origin_language: string;
  prons: any;
  super_script: string;
}