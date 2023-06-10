//atom 선언
import { atom } from "recoil";

const levelSelectState = atom({
  key: "levelSelectState",
  default: 5,
});

export default levelSelectState;
