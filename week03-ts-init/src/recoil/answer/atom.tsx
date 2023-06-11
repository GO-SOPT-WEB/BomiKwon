//atom 선언
import { atom } from "recoil";

export const answerAtom: number = atom({
  key: "answerAtom",
  default: 0,
});

export const resetAtom: boolean = atom({
  key: "resetAtom",
  default: false,
});
