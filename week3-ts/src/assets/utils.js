export const IMG = [
  "src/assets/Images/01.jpeg",
  "src/assets/Images/02.jpeg",
  "src/assets/Images/03.jpeg",
  "src/assets/Images/04.jpeg",
  "src/assets/Images/05.jpeg",
  "src/assets/Images/06.jpeg",
  "src/assets/Images/07.jpeg",
  "src/assets/Images/08.jpeg",
  "src/assets/Images/09.jpeg",
];

/**
 * 카드 선택, 배치 랜덤으로 하는 부분
 */
// 쌍이 묶인 배열들을 무작위로 섞어 랜덤으로 배치되게끔
const shuffle = (array) => {
  array.sort(() => Math.random() - 0.5);
  return array;
};
// 정해진 개수num만큼 카드를 랜덤하게 선택
export const randomImgChoice = (num, image) => {
  const indexOfIMG = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  var cnt = 0;
  const newImgs = []; // 랜덤하게 정해진 이미지
  while (cnt < num) {
    //정해진 개수까지만 선택
    var randomIndex = indexOfIMG.splice(
      //중복을 방지하기 위해 splice 사용
      Math.floor(Math.random() * indexOfIMG.length),
      1
    )[0];
    newImgs.push(image[randomIndex]);
    cnt += 1;
  }
  newImgs.map((url) => newImgs.push(url)); // 쌍으로 들어가야함
  return shuffle(newImgs); //셔플을 통해 섞은 배열
};
