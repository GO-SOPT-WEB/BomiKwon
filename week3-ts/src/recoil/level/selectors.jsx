import { selector } from "recoil";
import levelAtom from "./atom";

const selectedLevel = selector({
  key: "SelectedLevel",
  get: ({ get }) => get(levelAtom),
  set: ({ set, get }, selectedLevel) => {
    switch (selectedLevel.text) {
      case "EASY":
        return set(levelAtom, 5);
      // console.log(levelAtom);
      case "NORMAL":
        return set(levelAtom, 7);
      case "HARD":
        return set(levelAtom, 9);
      default:
        return set(levelAtom, 5);
    }
  },
});

export default selectedLevel;
