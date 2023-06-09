//atom 선언
import { atom, selector } from "recoil";
export const levelSelectState = atom({
  key: "levelSelectState",
  default: 5,
});
export const selectedLevelState = selector({
  key: "SelectedLevel",
  get: ({ get }) => {
    const level = get(levelSelectState);
    return level;
  },
  set: ({ set, get }, selectedLevel) => {
    // const select = get(selectedLevelState);
    switch (selectedLevel.text) {
      case "EASY":
        return set(levelSelectState, 5);
      // console.log(levelSelectState);
      case "NORMAL":
        return set(levelSelectState, 7);
      case "HARD":
        return set(levelSelectState, 9);
      default:
        return set(levelSelectState, 5);
    }
  },
});
