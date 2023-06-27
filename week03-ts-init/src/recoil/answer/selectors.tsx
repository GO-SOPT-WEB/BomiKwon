import { selector } from "recoil";
import { answerAtom, resetAtom } from "./atom";

export const totalAnswer: number = selector({
  key: "TotalAnswer",
  get: ({ get }) => get(answerAtom),
  set: ({ set, get }, newAnswer) => {
    set(answerAtom, newAnswer);
  },
});

export const clickedReset: boolean = selector({
  key: "ClickedReset",
  get: ({ get }) => get(resetAtom),
  set: ({ set, get }, clicked) => {
    set(resetAtom, clicked);
  },
});
