import { atom } from 'recoil';
import { SUPPORTED_LANGUAGE, SUPPORTED_LANGUAGE_LOWER } from '@models/general';

export const generalState = atom<{
  currentLanguage: string;
  selectedLanguage: SUPPORTED_LANGUAGE | '';
  routedLanguage: SUPPORTED_LANGUAGE_LOWER | '';
}>({
  key: 'general',
  default: {
    currentLanguage: '',
    selectedLanguage: '',
    routedLanguage: '',
  },
});

type IndexPageStep =
  | 1 // Language choose page
  | 2 // Token input page
  | 3 // Dict choose page
  | 80 // Token is not found
  | 90; // Token error page

export const languageState = atom<{
  indexPageStep: IndexPageStep;
}>({
  key: 'language',
  default: {
    indexPageStep: 1,
  },
});

export const authState = atom<{
  token: string;
  isLogin: boolean;
}>({
  key: 'auth',
  default: {
    token: '',
    isLogin: false,
  },
});

export const dialogState = atom<{
  callbackFn: null | (() => void | any);
  open: boolean;
  message: string;
  yes: string;
  no: string;
}>({
  key: 'dialog',
  default: {
    callbackFn: null,
    open: false,
    message: '',
    yes: 'はい',
    no: 'いいえ',
  },
});
