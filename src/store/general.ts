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

export const languageState = atom<{
  indexPageStep: number;
}>({
  key: 'language',
  default: {
    indexPageStep: 1,
  },
});

export const authState = atom<{
  token: string;
}>({
  key: 'auth',
  default: {
    token: '',
  },
});
