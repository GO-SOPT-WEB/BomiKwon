import { menuInfo, menuCategoryId, menuCategory } from "./dummy.js";

/**
 * nav에서 선택된 카테고리에 따라 카드, 태그 생성
 */
let selectedCtgr = [];
let nonSelectedCtgr = [];
const closeBtn = document.querySelectorAll(".selected-ctgr .cancel-btn");
// 1) 카드 생성하는 함수
const handleMenuCtgrSelected = (e) => {
  const targetID = e.target.getAttribute("href").replace("#", "");
  document.getElementById(targetID).style.display = "block";
  // 전체 메뉴를 선택한 경우
  if (targetID === "ctgr-all") {
    menuCategoryId.map((targetCtgr) => {
      Array.from(document.getElementsByClassName(targetCtgr)).forEach(
        (target) => (target.style.display = "block")
      );
    });
    selectedCtgr.push(targetID);
    // 그 외 메뉴를 선택한 경우
  } else {
    //여기서 getElementsByClassName은 배열이 아닌, 유사배열을 반환함에 주의!
    const cardSections = document.getElementsByClassName(targetID);
    Array.from(cardSections).forEach(
      (target) => (target.style.display = "block")
    );
    selectedCtgr.push(targetID);
  }
};

//----------------------------------------------------------
/**
 * 메뉴 카테고리 띄우는 부분 + 카드생성 함수 호출
 */
const navTarget = document.getElementById("navContainer");
menuCategoryId.map((id, key) => {
  const navAtag = document.createElement("a");
  navAtag.setAttribute("href", "#" + id);
  navAtag.setAttribute("class", "nav-container");
  navAtag.innerText = menuCategory[key];
  navTarget.append(navAtag);
  let isClick = false;
  navTarget.addEventListener("click", (e) => {
    handleMenuCtgrSelected(e);
  });
});
//----------------------------------------------------------
/**
 * 선택된 메뉴 카테고리 위에 띄우는 부분 - 취소버튼클릭 시 카드 삭제까지
 */
const Ctgrtag = document.getElementById("selected-ctgr");
menuCategoryId.map((id, key) => {
  const navDivtag = document.createElement("div");
  navDivtag.setAttribute("id", id);
  const navDivInnertag = document.createElement("div");
  navDivInnertag.setAttribute("class", "category-container");
  const navh2tag = document.createElement("h2");
  navh2tag.innerText = menuCategory[key];
  const navh3tag = document.createElement("h3");
  navh3tag.innerText = "X";
  navh3tag.setAttribute("class", "cancel-btn");
  navDivInnertag.append(navh2tag);
  navDivInnertag.append(navh3tag);
  navDivtag.append(navDivInnertag);
  Ctgrtag.append(navDivtag);
});
function selectedCtgrMatch(post) {
  switch (post) {
    case "안주":
      return "ctgr-dish";
    case "탕":
      return "ctgr-tang";
    case "사이드":
      return "ctgr-side";
    case "술":
      return "ctgr-alcohol";
    default:
      return "ctgr-all";
  }
}
// 2) 카드 삭제하는 함수 -위의 카테고리에 의해
const handleSelectedCtgrCanceled = (e) => {
  const targetIDText = e.target.previousSibling.innerText;
  const targetID = selectedCtgrMatch(targetIDText);
  document.getElementById(targetID).style.display = "none";
  // 전체 메뉴를 취소한 경우
  if (targetID === "ctgr-all") {
    nonSelectedCtgr = menuCategoryId.filter((id) => !selectedCtgr.includes(id));
    nonSelectedCtgr.map((targetCtgr) => {
      Array.from(document.getElementsByClassName(targetCtgr)).forEach(
        (target) => (target.style.display = "none")
      );
    });
    // 그 외 메뉴를 취소한 경우
  } else {
    const cardSections = document.getElementsByClassName(targetID);
    Array.from(cardSections).forEach(
      (target) => (target.style.display = "none")
    );
  }
};
const btnClose = document.getElementsByClassName("cancel-btn");
Array.from(btnClose).map((btn) =>
  btn.addEventListener("click", (e) => {
    handleSelectedCtgrCanceled(e);
  })
);
//----------------------------------------------------------
function ctgrMatch(post) {
  if (post.category === "안주") {
    return "ctgr-dish";
  } else if (post.category === "탕") {
    return "ctgr-tang";
  } else if (post.category === "사이드") {
    return "ctgr-side";
  } else if (post.category === "술") {
    return "ctgr-alcohol";
  }
}
function postTitle(post) {
  const h2 = document.createElement("h2");
  h2.setAttribute("class", "card-title");
  h2.textContent = post.menuName;
  return h2;
}
function postTag(post) {
  const div = document.createElement("div");
  div.setAttribute("class", "card-tag");
  const h3 = document.createElement("p");
  h3.innerText = post.menuTag;
  const icon = document.createElement("img");
  icon.setAttribute("src", "./images/square-caret-down-solid.svg");
  icon.setAttribute("class", "modal-open-icon");
  icon.setAttribute("alt", "더보기아이콘");
  div.append(h3);
  div.append(icon);
  return div;
}
function postImg(post) {
  const img = document.createElement("img");
  img.setAttribute("src", post.menuImgUrl);
  img.setAttribute("class", "menuImg");
  img.setAttribute("alt", "메뉴이미지");
  return img;
}
for (var i = 0; i < menuInfo.length; i++) {
  const cardContent = document.querySelector("#card-wrap");
  const section = document.createElement("section");
  section.setAttribute("class", "card");
  // 더미데이터의 카테고리를 태그의 속성과 매치해주는 부분
  section.classList.add(ctgrMatch(menuInfo[i]));
  cardContent.append(section);
  const div = document.createElement("div");
  div.setAttribute("id", "content");
  section.append(div);
  div.append(postTitle(menuInfo[i]));
  div.append(postTag(menuInfo[i]));
  // 팝업되는 태그 모달
  const modal = document.createElement("div");
  modal.setAttribute("class", "tag-modal");
  modal.innerText = menuInfo[i].menuTag;
  const icon = document.createElement("img");
  icon.setAttribute("src", "./images/square-caret-down-solid.svg");
  icon.setAttribute("class", "modal-close-icon");
  icon.setAttribute("alt", "더보기아이콘");
  modal.append(icon);
  modal.style.display = "none";
  div.append(modal);

  div.append(postImg(menuInfo[i]));
  const img = document.createElement("img");
  img.setAttribute("src", "./images/glass-water-solid.svg");
  img.setAttribute("class", "icon");
  img.setAttribute("alt", "찜아이콘");
  div.append(img);
}
//----------------------------------------------------------
var modalOpenTarget = document.querySelectorAll(".card-tag .modal-open-icon");
// var modalCloseTarget=document.querySelectorAll('.modal-close-icon');
for (var i = 0; i < modalOpenTarget.length; i++) {
  modalOpenTarget[i].addEventListener("click", function () {
    this.parentNode.parentNode.querySelector(".tag-modal").style.display =
      "block";
  });
}
var modalCloseTarget = document.querySelectorAll(".modal-close-icon");
for (var i = 0; i < modalCloseTarget.length; i++) {
  modalCloseTarget[i].addEventListener("click", function () {
    this.parentNode.style.display = "none";
  });
}
