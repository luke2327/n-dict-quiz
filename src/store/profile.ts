import { PROFILE } from "@models/profile";
import { atom } from "recoil";

export const profileState = atom<PROFILE>({
  key: 'profile',
  default: {
    nuid: '',
    nickName: '',
    imageUrl: '',
    loginStatus: ''
  }
});