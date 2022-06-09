import { atom } from 'recoil';

type ErrorObject = {
  status: null | string;
  message: null | string;
};

export const commonErrorState = atom<{
  currentError: ErrorObject | null;
}>({
  key: 'commonError',
  default: {
    currentError: null,
  },
});
