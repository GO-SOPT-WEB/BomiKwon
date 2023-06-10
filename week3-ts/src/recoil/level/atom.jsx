//atom 선언
import { atom } from "recoil";

const levelAtom = atom({
  key: "levelAtom",
  default: 5,
});

export default levelAtom;
