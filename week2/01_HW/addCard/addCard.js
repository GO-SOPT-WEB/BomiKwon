/**
 * 이미지 선택 후 미리보는 함수
 */
const readImage = (input) => {
  // 인풋 태그에 파일이 있는 경우
  if (input.files && input.files[0]) {
    // 이미지 파일인지 검사 (생략)
    // FileReader 인스턴스 생성
    const reader = new FileReader();
    // 이미지가 로드가 된 경우
    reader.onload = (e) => {
      const previewImage = document.getElementById("selectedPhoto");
      previewImage.src = e.target.result;
    };
    // reader가 이미지 읽도록 하기
    reader.readAsDataURL(input.files[0]);
  }
};
// input file에 change 이벤트 부여
const inputImage = document.getElementById("inputPhoto");
inputImage.addEventListener("change", (e) => {
  readImage(e.target);
});

/**
 * 추가된 정보를 로컬 스토리지에 저장
 */
const addedCard = [{ menuName: "", menuTag: "", menuCtgr: "" }];
//메뉴 이름
const menuName = document.getElementById("inputName");
const getMenuName = (e) => {
  addedCard.menuName = e.target.value;
};
menuName.addEventListener("change", (e) => {
  getMenuName(e);
});
//메뉴 태그
const menuTag = document.getElementById("inputTag");
const getMenuTag = (e) => {
  addedCard.menuTagmenuTag = e.target.value;
};
menuTag.addEventListener("change", (e) => {
  getMenuTag(e);
});
//메뉴 카테고리
const menuCtgr = document.getElementsByTagName("select");
const getMenuCtgr = (e) => {
  addedCard.menuCtgrmenuCtgr = e.target.value;
};
menuCtgr.addEventListener("change", (e) => {
  getMenuCtgr(e);
});
//받아온 정보 로컬에 저장
const saveMenu = () => {
  localStorage.setItem("menu", JSON.stringify(addedCard));
};
const button = document.getElementById("addBtn");
button.addEventListener("click", (e) => {
  saveMenu();
});
