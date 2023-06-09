import React from "react";
import { selector } from "recoil";
import { levelInfo } from "../atom/store.js";

export const selectedLevelState = selector({
  key: "SelectedLevel",
  get: ({ get }) => {
    const select = get(selectedLevelState);
    const level = get(levelInfo);
    switch (select) {
      case level[0]:
        return 5;
      case level[1]:
        return 7;
      case level[2]:
        return 9;
      default:
        return 5;
    }
  },
});
