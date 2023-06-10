//atom 선언
import { atom } from "recoil";

export const answerAtom = atom({
  key: "answerAtom",
  default: 0,
});

export const resetAtom = atom({
  key: "resetAtom",
  default: false,
});
