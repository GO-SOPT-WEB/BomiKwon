//atom 선언
import { atom } from "recoil";
export const levelState = atom({
  key: "levelInfo",
  default: ["EASY", "NORMAL", "HARD"],
});
export const levelSelectState = atom({
  key: "selectedLevelInfo",
  default: "",
});
